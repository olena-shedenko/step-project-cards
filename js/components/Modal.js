class Modal {
    constructor() {
        this.btnClose = new Button('button', 'close');
        //here we initialize form and all needed fields
    }

    render(parent) {
        this.domNode = document.createElement('div');
        this.btnClose.render(this.domNode);
        arent.append(this.domNode);
        return this.domNode;
    }

    hide() {
        this.domNode.style.display = 'block';
    }
    show() {
        this.domNode.style.display = 'none';
    }
}
