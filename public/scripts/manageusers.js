class ManageUsersPage {
    constructor() {
        this.deleteButtons = document.querySelectorAll('.delete-user');
        if (this.deleteButtons) {
            this.deleteButtons.forEach( d => {
                d.addEventListener('click', this.deleteUser.bind(this));
            })
        }
        console.log(this.deleteButtons);
    }
    async deleteUser(evt) {
        const button = evt.target;
        const userId = button.getAttribute('data-userid');
        await fetch(`/api/users/${userId}`,{
            method: 'DELETE',
            body: {}
        });
        window.location.reload();
    }
}

window.onload = () => new ManageUsersPage();
