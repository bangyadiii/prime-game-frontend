import LogoApp from "@/app/assets/svg/logo.svg";
import SignupForm from "@/components/organisms/SignUpForm";
import Link from "next/link";

export default function Page() {
    return (
        <>
            {/* Sign Up */}
            <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
                <div className="container mx-auto">
                    <form action="">
                        <div className="pb-50">
                            <Link className="navbar-brand" href="/">
                                <LogoApp width={60} height={60} />
                            </Link>
                        </div>
                        <SignupForm />
                    </form>
                </div>
            </section>
        </>
    );
}
