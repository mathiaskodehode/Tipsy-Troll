import { CreateElement } from "./domManipulator.js";
import { GetMain } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        parent: GetMain(),
        id: "contactUs",
    });
    CreateElement("h2", {
        parent: section,
        innerText: "Send en beskjed",
    });
    BuildForm(section);
}

function BuildForm(parent) {
    const form = CreateElement("form", {
        parent: parent,
        id: "contactForm",
    });
    CreateInputFormGroup({
        parent: form,
        labelFor: "name",
        labelText: "Navnet ditt",
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Grumble Trollbrew",
        required: true,
    });
    CreateInputFormGroup({
        parent: form,
        labelFor: "email",
        labelText: "Eposten din",
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Grumble@email.com",
        required: true,
    });
    CreateTextAreaFormGroup({
        parent: form,
        labelFor: "message",
        labelText: "Meldingen din",
        id: "message",
        name: "message",
        placeholder: "Den beste opplevelsen eg har hatt!",
        required: true,
    });
    CreateElement("button", {
        parent: CreateElement("div", { parent: form }),
        type: "submit",
        innerText: "Send",
    });
}

function CreateInputFormGroup(options) {
    const container = CreateFormContainerWithLabel(options.parent, options.labelFor, options.labelText);
    CreateElement("input", {
        parent: container,
        type: options.type,
        id: options.id,
        name: options.name,
        placeholder: options.placeholder,
        required: options.required,
    });
    return container;
}

function CreateTextAreaFormGroup(options) {
    const container = CreateFormContainerWithLabel(options.parent, options.labelFor, options.labelText);
    CreateElement("textarea", {
        parent: container,
        id: options.id,
        name: options.name,
        placeholder: options.placeholder,
        required: options.required,
    });
    return container;
}

function CreateFormContainerWithLabel(parent, labelFor, labelText) {
    const container = CreateElement("div", {
        parent: parent,
    });
    CreateLabel(container, labelFor, labelText);
    return container;
}

function CreateLabel(parent, labelFor, labelText) {
    return CreateElement("label", {
        parent: parent,
        for: labelFor,
        innerText: labelText,
    });
}
