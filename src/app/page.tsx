import Image from "next/image";
import LoginForm from './../components/LoginForm';

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center px-5">
        <LoginForm />
      </div>
    </main>
  );
}
