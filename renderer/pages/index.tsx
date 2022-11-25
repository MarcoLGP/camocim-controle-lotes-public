import LeftContentLogin from "../components/login/LeftContentLogin"
import RightContentLogin from "../components/login/RightContentLogin"

export default function Home() {

  return (
    <section className={'sign_container'}>
      <LeftContentLogin />
      <RightContentLogin />
    </section>
  )

}