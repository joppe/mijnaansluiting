/**
 * @example validateOpdrachtId('OVP-200123499') => true
 */
export function validateOpdrachtId(id: string): boolean {
  if (id.length !== 13) {
    return false;
  }

  if (!id.startsWith("OVP-")) {
    return false;
  }

  const [, digits] = id.split("-");

  if (Number.isNaN(parseInt(digits, 10))) {
    return false;
  }

  return true;
}
