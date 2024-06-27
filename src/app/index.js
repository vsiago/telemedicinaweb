import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const IndexPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Verifica se o usuário está autenticado ao carregar a página
    if (isAuthenticated()) {
      // Redireciona para a rota protegida
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  // Esta página não renderiza conteúdo visível ao usuário,
  // ela é usada apenas para redirecionamento baseado na autenticação

  return null;
};

export default IndexPage;
