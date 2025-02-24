npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
                <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>
                
                <form className="mt-6 space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-gray-700">Role</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin/HOD</option>
                        </select>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
