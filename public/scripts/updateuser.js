class UpdateUserPage {
    constructor() {
        this.submitButton = document.getElementById('submitButton');
        this.submitButton.addEventListener('click', this.updateUser.bind(this));
    }
    get user() {
        return {
            name: document.getElementById('nameInput').value,
            age: +document.getElementById('ageInput').value,
            department: document.getElementById('departmentInput').value,
            title: document.getElementById('titleInput').value
        };
    }
    async updateUser(evt) {
        const button = evt.target;
        const userId = button.getAttribute('data-userid');
        const result = await fetch(`/api/users/${userId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(this.user)
        });
        await result.json();
        window.location = '/manageusers';
    }
}

window.onload = () => new UpdateUserPage();
