"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle, BsInstagram } from "react-icons/bs"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);


    const toggleVariant = useCallback(() => {
        (variant === "LOGIN") ? setVariant("REGISTER") : setVariant("LOGIN")
        setIsLoading(false)
    }, [variant]);


    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === "LOGIN") {
            // nextAuth Signin
        }
        if (variant === "REGISTER") {
            //axios register
        }
    }


    const socialAction = (action: string) => {
        setIsLoading(true)

        // nextAuth social signin
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} />}
                    <Input id="email" label="Email address" type="email" register={register} errors={errors} disabled={isLoading} />
                    <Input id="password" label="Password" type="password" register={register} errors={errors} disabled={isLoading} />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {
                                variant === "LOGIN" ? "Sign in" : "Register"
                            }
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 set text-gray5">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction("github")} />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction("google")} />
                        <AuthSocialButton
                            icon={BsInstagram}
                            onClick={() => socialAction("instagram")} />
                    </div>
                </div>
                <div className="mt-6 flex gap-2 justify-center text-sm px-2 text-gray-500">
                    <div>
                        {variant === "LOGIN" ? "New to myMessenger?" : "Already have an account?"}
                    </div>
                    <div
                    onClick={toggleVariant}
                    className="underline cursor-pointer">
                        {variant==="LOGIN"?"Create an account":"Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;