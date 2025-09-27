// 서버와 클라이언트에서 일관된 결과를 보장

export default function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date
    .toISOString()
    .split("T")[0]
    .split("-")
    .join(".")
    .replace(/^(\d{4})\.(\d{2})\.(\d{2})$/, "$1. $2. $3.");
}
