"""
Deploy script — sube el sitio estático a cesarescalantesifuentes.com
Requisito: pip install paramiko python-dotenv
"""

import os
import subprocess
import sys
from pathlib import Path

import paramiko
from dotenv import load_dotenv

# ── Configuración ──────────────────────────────────────────────────────────────
load_dotenv(".env.deploy")

SSH_HOST     = os.environ.get("SSH_HOST", "145.223.105.59")
SSH_PORT     = int(os.environ.get("SSH_PORT", 65002))
SSH_USER     = os.environ.get("SSH_USER", "u286274846")
SSH_PASSWORD = os.environ.get("SSH_PASSWORD", "")
REMOTE_DIR   = "/home/u286274846/public_html"
LOCAL_DIR    = Path("out")


# ── Helpers ────────────────────────────────────────────────────────────────────
def build():
    print("[>>] Construyendo el proyecto (npm run build)...")
    result = subprocess.run(["npm", "run", "build"], shell=True)
    if result.returncode != 0:
        print("[X]  El build fallo. Abortando deploy.")
        sys.exit(1)
    if not LOCAL_DIR.exists():
        print(f"[X]  No se encontro la carpeta '{LOCAL_DIR}'. Verifica next.config.ts.")
        sys.exit(1)
    print("[OK] Build completado.\n")


def sftp_mkdir_p(sftp: paramiko.SFTPClient, remote_path: str):
    """Crea directorios remotos recursivamente si no existen."""
    parts = remote_path.replace("\\", "/").split("/")
    current = ""
    for part in parts:
        if not part:
            current = "/"
            continue
        current = f"{current}/{part}" if current != "/" else f"/{part}"
        try:
            sftp.stat(current)
        except FileNotFoundError:
            sftp.mkdir(current)


def upload_dir(sftp: paramiko.SFTPClient, local: Path, remote: str):
    """Sube recursivamente un directorio local al servidor remoto."""
    sftp_mkdir_p(sftp, remote)
    for item in local.iterdir():
        remote_item = f"{remote}/{item.name}"
        if item.is_dir():
            upload_dir(sftp, item, remote_item)
        else:
            sftp.put(str(item), remote_item)
            print(f"  [^] {item.relative_to(LOCAL_DIR)}")


# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    build()

    print(f"[>>] Conectando a {SSH_HOST}:{SSH_PORT} como {SSH_USER}...")
    transport = paramiko.Transport((SSH_HOST, SSH_PORT))
    transport.connect(username=SSH_USER, password=SSH_PASSWORD)
    sftp = paramiko.SFTPClient.from_transport(transport)
    print("[OK] Conexion SSH establecida.\n")

    print(f"[>>] Subiendo archivos a {REMOTE_DIR}...")
    upload_dir(sftp, LOCAL_DIR, REMOTE_DIR)

    sftp.close()
    transport.close()
    print("\n[OK] Deploy completado -- https://cesarescalantesifuentes.com")


if __name__ == "__main__":
    main()
