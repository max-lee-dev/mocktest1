export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than a minute
  if (diffInSeconds < 60) {
    return 'just now';
  }

  // Less than an hour
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  // Less than a day
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }

  // Less than a week
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }

  // Less than a month
  if (days < 30) {
    return `${Math.floor(days / 7)}w ago`;
  }

  // Less than a year
  if (days < 365) {
    return `${Math.floor(days / 30)}mo ago`;
  }

  // More than a year
  return `${Math.floor(days / 365)}y ago`;
} 