
import patientliste from "./patientliste.js"; // nous avons importer notre code patientliste

let inputName, addbutton, inputage, inputdesease, out, patient = []; // ici nous definissons tout nos ID avec laquel nous allons travailler dans notre code

let initUI = () => { // ici nous initialisons nos ID
    inputName = document.getElementById('inputName');
    inputage = document.getElementById('inputage');
    inputdesease = document.getElementById('inputdesease');
    addbutton = document.getElementById('addbutton');
    out = document.getElementById('out');

    let createPt = () => {
        let pt = new patient(inputName.value, [])
        return pt;
    }

    let createage = () => {
        let age = new age(inputage.value, [])
        return age;
    }

    let createdesease = () => {
        let desease = new desease(inputdesease.value, [])
    }


    let addpt = () => {
        let pt = createPt();
        patientliste.push(pt)
        paint();
    }

    let addage = () => {
        let age = createage();
        patientliste.push(age)
        show();
    }

    let adddesease = () => {
        let desease = createdesease();
        patientliste.push(desease)
        draw();
    }


    let paint = () => {
        let list = patientliste.map(pt => `<th><th>${pt.name}</th></th>`)
        out.innerHTML = list.join("")
        paint();
    }

    let show = () => {
        let list = patientliste.map(age => `<th><th>${age.age}</th></th>`)
        out.innerHTML = list.join("")
        pict();
    }

    let draw = () => {
        let list = patientliste.map(desease => `<th><th>${desease.desease}</th></th>`)
        out.innerHTML = list.join("")
        pict();
    }


    addbutton.addEventListener("click", () => {
        if (inputName.value == "") {
        }
        else {
            addpt();
        }
        if (inputage.value == "") {

        }
        else {
            addage();
        }

        if (inputdesease.value == "") {
        }
        else {
            adddesease();
        }
    }
    )
}
self.addEventListener('load', initUI)