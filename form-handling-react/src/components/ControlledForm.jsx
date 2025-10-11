import { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Form submitted:', formData);

        // Simulate sending data to an API
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => console.log('Mock API response:', data));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
    );
};

export default ControlledForm;
