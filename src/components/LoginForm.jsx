import { memo, useCallback } from 'react';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  const handleChange = useCallback((event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }, []);

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
});

export default LoginForm;
