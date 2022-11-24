import { Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import React from 'react';
import { useStylesSignIn } from '.';
import { ModalBlock } from '../../../components/ModalBlock';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthApi } from '../../../services/api/authApi';
import { Notification } from '../../../components/Notification';
import { Color } from '@material-ui/lab';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup
  .object({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
  })
  .required();

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
  const classes = useStylesSignIn();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (
    openNotification: (text: string, type: Color) => void,
    data: LoginFormProps,
  ) => {
    try {
      const userData = await AuthApi.signIn(data);
      openNotification('Авторизация успешна', 'success');
      console.log(userData);
    } catch {
      openNotification('Неверный логин и пароль', 'error');
    }
  };

  console.log(errors);

  return (
    <Notification>
      {(openNotification) => (
        <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
          <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      className={classes.loginSideField}
                      id="email"
                      label="E-Mail"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      autoFocus
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      className={classes.loginSideField}
                      id="password"
                      label="Пароль"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      autoFocus
                      fullWidth
                    />
                  )}
                />

                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </ModalBlock>
      )}
    </Notification>
  );
};
