import { useContext } from "react";
import { AuthContext } from "../../contexts";
import logoImg from "../../assets/logo.svg";
import { useEffect } from "react";
import { Container } from "../../components/container";
import { Link } from "react-router";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";

const schema = z.object({
  name: z.string().nonempty("O preenchimento do campo nome é obrigatório!"),
  email: z
    .string()
    .email("Insira um e-mail válido!")
    .nonempty("O preenchimento do campo e-mail é obrigatório!"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .nonempty("O preenchimento do campo senha é obrigatório"),
});

type FormaData = z.infer<typeof schema>;

export function Register() {
  const { handleInfoUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormaData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }
    handleLogout();
  }, []);

  function onSubmit(data: FormaData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name,
        });
        handleInfoUser({
          name: data.name,
          email: data.email,
          uid: user.user.uid,
        });

        console.log("USUÁRIO CADASTRADO COM SUCESSO!!!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log("ERRO AO CADASTRAR ESTE USUÁRIO!!!");
        console.log(error.message);
      });
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link className="mb-6 max-w-sm w-full" to="/">
          <img className="w-full" src={logoImg} alt="Logo do site" />
        </Link>
        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Digite seu nome..."
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu e-mail..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
        <Link to="/login">Já possui uma conta? Faça login!</Link>
      </div>
    </Container>
  );
}
