const ROLES = {
  user: { dataKey: 'USER', loggedKey: 'USER_LOGGED' },
  admin: { dataKey: 'ADMIN', loggedKey: 'ADMIN_LOGGED' },
  technician: { dataKey: 'TECHNICIAN', loggedKey: 'TECHNICIAN_LOGGED' },
  guard: { dataKey: 'GUARD', loggedKey: 'GUARD_LOGGED' },
};

function parseJson(value) {
  if (value == null) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/** @param {'user'|'admin'|'technician'|'guard'} role */
export function loadAuthSession(role) {
  const { dataKey, loggedKey } = ROLES[role];
  let logged = parseJson(localStorage.getItem(loggedKey));
  let data = parseJson(localStorage.getItem(dataKey));

  // Legacy: single LOGGED flag shared across roles
  if (logged == null && data != null) {
    const legacyLogged = parseJson(localStorage.getItem('LOGGED'));
    if (legacyLogged === true) {
      logged = true;
    }
  }

  if (logged === true && data != null) {
    return { logged: true, data };
  }
  return { logged: false, data: null };
}

/** @param {'user'|'admin'|'technician'|'guard'} role */
export function saveAuthSession(role, { logged, data }) {
  const { dataKey, loggedKey } = ROLES[role];
  localStorage.setItem(loggedKey, JSON.stringify(Boolean(logged)));
  if (data != null) {
    localStorage.setItem(dataKey, JSON.stringify(data));
  } else {
    localStorage.removeItem(dataKey);
  }
}

export function clearAuthSession(role) {
  const { dataKey, loggedKey } = ROLES[role];
  localStorage.removeItem(dataKey);
  localStorage.removeItem(loggedKey);
}

export function clearAllAuthSessions() {
  Object.values(ROLES).forEach(({ dataKey, loggedKey }) => {
    localStorage.removeItem(dataKey);
    localStorage.removeItem(loggedKey);
  });
  localStorage.removeItem('LOGGED');
  localStorage.removeItem('SIGNED');
}
