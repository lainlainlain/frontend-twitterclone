import { Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import React from 'react';
import { useStylesSignIn } from '.';
import { ModalBlock } from '../../../components/ModalBlock';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
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

  const onSubmit = (data: LoginFormProps) => console.log(data);

  console.log(errors);

  return (
    <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
              )}
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              id="password"
              label="Пароль"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="password"
              fullWidth
            />
            <Button onClick={onClose} variant="contained" color="primary" fullWidth type="submit">
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};
