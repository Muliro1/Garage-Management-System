export function formatErrors(error) {
  if (error == null) return [];
  if (Array.isArray(error)) return error.filter(Boolean);
  if (typeof error === 'string') return error ? [error] : [];
  return [String(error)];
}

export function hasErrors(error) {
  return formatErrors(error).length > 0;
}
