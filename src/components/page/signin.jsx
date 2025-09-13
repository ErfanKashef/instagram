export function Signin() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                className="w-5/12 h-1/2 flex flex-col justify-center gap-4 mx-auto px-6 py-4 border rounded-lg shadow-md"
                action="/login"
                method="POST"
            >
                <img
                    className="pt-2 w-52 h-16 mx-auto mb-4"
                    src="../img/Vector (7).png"
                    alt="logo"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2"
                    required
                />

                <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    className="border rounded px-3 py-2"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border rounded px-3 py-2"
                    required

                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Sign Up
                </button>
                <div className="flex gap-2">
                    <p >Already have an account?</p>
                    <span className="text-blue-600 ">  Login </span>
                </div>
            </form>
        </div>
    );
}
