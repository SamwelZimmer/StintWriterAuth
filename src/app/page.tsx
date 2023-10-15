import SignUp from "../../components/SignUp";

export default function Home() {
  return (
    <>
      <main className="flex bg-background min-h-screen flex-col items-center justify-center py-24 px-8 gap-8">

        <span className="text-3xl sm:text-5xl font-semibold text-center">Log In or Sign Up</span>
        <SignUp />
        <span className="text-center text-gray-300">Michal. I went overkill.</span>

      </main>
    </>

  )
}
