import React from 'react'


function Register() {

    const [formData, setFormData] = React.useState({
        name: "",
        lastname: "",
        email: "",
        password: ""
    })



    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className='container mx-auto p-4 max-w-md bg-gray-100 rounded-lg shadow-lg d-block'>
                    <h3 className="text-2xl font-bold text-center mb-6">Crie sua conta</h3>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input className="bg-white rounded border border-none"
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        <div className=''>
                            <label>Sobrenome</label>
                            <input className="bg-white rounded border border-none"
                                type="text"
                                name="name"
                                placeholder="Digite seu sobrenome"
                                required
                            />
                        </div>
                        <div className=''>
                            <label>Email</label>
                            <input className="bg-white rounded border border-none"
                                type="text"
                                name="name"
                                placeholder="Digite seu email"
                                required
                            />
                        </div>
                        <div className=''>
                            <label>Senha</label>
                            <input className="bg-white rounded border border-none"
                                type="text"
                                name="name"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register