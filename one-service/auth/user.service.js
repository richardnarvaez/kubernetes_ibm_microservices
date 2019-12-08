
const users = [
    {
        username: 'ibm_test_robot_1',
        password: "ibm_test_1.123#"
    },
    {
        username: 'ibm_test_robot_2',
        password: 'ibm_test_2.123#'
    },
    {
        username: 'ibm_test_robot_3',
        password: "ibm_test_3.123#"
    }
];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}