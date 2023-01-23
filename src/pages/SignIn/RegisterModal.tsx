import { Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import React from 'react';
import { useStylesSignIn } from '.';
import { ModalBlock } from '../../components/ModalBlock';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Notification } from '../../components/Notification';
import { Color } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSignUp } from '../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingStatus } from '../../store/types';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export interface RegisterFormProps {
  email: string;
  username: string;
  fullname: string;
  password: string;
  password2: string;
}

const RegisterFormSchema = yup
  .object({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите свое имя'),
    fullname: yup.string().required('Введите свою фамилию'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
  })
  .required();

export const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  const classes = useStylesSignIn();
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (data: RegisterFormProps) => {
    dispatch(fetchSignUp(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Регистрация успешна!', 'success');
      onClose();
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Ошибка при регистрации', 'error');
    }
  }, [loadingStatus]);

  return (
    <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  label="Электронная почта"
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
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  className={classes.loginSideField}
                  id="name"
                  label="Ваш логин"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  autoFocus
                  fullWidth
                />
              )}
            />
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  className={classes.loginSideField}
                  id="fullname"
                  label="Ваше полное имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  error={!!errors.fullname}
                  helperText={errors.fullname?.message}
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
                  label="Ваш пароль"
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
            <Controller
              name="password2"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  className={classes.loginSideField}
                  id="password2"
                  label="Повторите ваш пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  error={!!errors.password2}
                  helperText={errors.password2?.message}
                  autoFocus
                  fullWidth
                />
              )}
            />

            <Button
              disabled={loadingStatus === LoadingStatus.LOADING}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth>
              Регистрация
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};
