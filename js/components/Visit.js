import Input from './Input.js';
import Button from './Button.js';
import Select from './Select.js';
import Textarea from './Textarea.js';
import Form from './Form.js';
import Modal from './Modal.js';

// class SelectForm {
//     constructor() {
//         this.submit = new Button('submit', 'submit')
//         this.select = new Select({ 
//             options: ['Doctor','Dentist', 'Cardiologist', 'Therapist'],
//             onChange: value => alert(value)
//         });
//         this.form = new Form({
//             children: [this.select, this.submit],
//             onSubmit: () => alert(this.select.value)
//         })
//     }
//     render(parent) {
//         this.form.render(parent);
//     }
// }

// const appointmentForm = new SelectForm();
// appointmentForm.render(document.getElementById('app'));
class Visit {
    constructor(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent) {
        this.doctor = doctor;
        this.fullName = fullName;
        this.age = age;
        this.priority = priority;
        this.purposeOfVisit = purposeOfVisit;
        this.shortDescr = shortDescr;
        this.parent = parent
    }
    render(parent) {
        this.parent.render(parent);
    }
}

class VisitDentist extends Visit  {
    constructor(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent, lastVisit) {
        super(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent);
        this.lastVisit = lastVisit;
    }

    render(parent) {
        super.render(parent);
    } 
}

class VisitCardiologist extends Visit {
    constructor(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent, pressure, bodyMI, prevDiseases) {
        super(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent);
        this.pressure = pressure;
        this.bodyMI = bodyMI;
        this.prevDiseases = prevDiseases;

    }

    render(parent) {
        super.render(parent);
    }
}
class VisitTherapist extends Visit {
    constructor(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent) {
        super(doctor, fullName, age, priority, purposeOfVisit, shortDescr, parent);
    }

    render(parent) {
        super.render(parent);
    }
}

class Visit {
    constructor() {
        this.doctor = new Select({
            options: ['Doctor','Dentist', 'Cardiologist', 'Therapist'],
            onChange: value => alert(value)
        });
        this.name = new Input('text');
        this.age = new Input('number');
        this.priority = new Select({
            options: ['Priority','Normal', 'High', 'Urgent'],
            onChange: value => alert(value)
        });
        this.purposeOfVisit = new Input('text');
        this.shortDescr = new Textarea('short description of visit');
        this.form = new Form({
            children: [this.doctor, this.name, this.age, this.priority, this.purposeOfVisit, this.shortDescr],
            onSubmit: () => alert('GREAT, you filled the form')
        });
    }

    render(parent) {
        this.form.render(parent);

    }
}

// const visit = new Visit();
// visit.render(document.getElementById('app'));

class Modal {
    constructor() {
        this.btnClose = new Button('button', 'close');
        this.visit = new Visit();

    }

    render(parent) {
        
        this.domNode = document.createElement('div');
        
        this.btnClose.render(this.domNode);
        this.visit.render(this.domNode);
        this.addStyles();
        parent.append(this.domNode);
        return this.domNode;
    }
    addStyles() {
        
        this.domNode.classList.add('modal');
        this.show();
    }

    show() {
        this.domNode.style.display = 'block';
    }

    hide() {
        this.domNode.style.display = 'none';
    }
}

const modal = new Modal();
modal.render(document.getElementById('app'));