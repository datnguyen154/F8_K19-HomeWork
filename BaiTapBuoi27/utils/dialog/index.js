const renderDialog = (data = {}, isEdit = false) => {
    /*
     * data: {
     * name: string,
     * email: string,
     * phone: string,
     * tax: string,
     * address: string
     * }
     *
     * isEdit: bool
     * */

    const createFormGroup = (
        labelText,
        inputType,
        inputPlaceholder,
        inputKey,
        isFullWidth = false,
    ) => {
        const group = document.createElement("div");
        group.className = `form-group ${isFullWidth ? "full-width" : ""}`;

        const label = document.createElement("label");
        label.className = "form-label";
        label.innerText = labelText;

        const input = document.createElement("input");
        input.type = inputType;
        input.className = "form-input";
        input.placeholder = inputPlaceholder;
        input.name = inputKey;

        if (data && data[inputKey]) {
            input.value = data[inputKey];
        }

        group.append(label, input);
        return group;
    };

    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    const backdrop = document.createElement("label");
    backdrop.className = "popup-backdrop";
    backdrop.setAttribute("for", "popup-toggle");

    const popupContent = document.createElement("div");
    popupContent.className = "panel popup-content";

    const panelHeader = document.createElement("div");
    panelHeader.className = "panel-header";
    panelHeader.setAttribute(
        "style",
        "border-bottom: none; padding-bottom: 0;",
    );

    const panelTitle = document.createElement("h2");
    panelTitle.className = "panel-title";

    panelTitle.innerText = isEdit
        ? "Edit Customer Details"
        : "Add New Customer";
    panelHeader.append(panelTitle);

    const popupBody = document.createElement("div");
    popupBody.className = "popup-body";

    const formGrid = document.createElement("div");
    formGrid.className = "form-grid";

    formGrid.append(
        createFormGroup(
            "Company Name *",
            "text",
            "e.g. Cty TNHH F8",
            "name",
            true,
        ),
        createFormGroup(
            "Email Address",
            "email",
            "contact@example.com",
            "email",
            false,
        ),
        createFormGroup("Phone Number", "tel", "0987 654 321", "phone", false),
        createFormGroup(
            "Tax ID (Mã số thuế)",
            "text",
            "018381123412",
            "tax",
            true,
        ),
        createFormGroup(
            "Physical Address",
            "text",
            "Enter full address...",
            "address",
            true,
        ),
    );

    popupBody.append(formGrid);

    const popupFooter = document.createElement("div");
    popupFooter.className = "popup-footer";

    const cancelBtn = document.createElement("label");
    cancelBtn.className = "btn btn-cancel";
    cancelBtn.setAttribute("for", "popup-toggle");
    cancelBtn.innerText = "Cancel";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "btn btn-save";
    saveBtn.innerText = isEdit ? "Update Customer" : "Save Customer";

    popupFooter.append(cancelBtn, saveBtn);

    popupContent.append(panelHeader, popupBody, popupFooter);
    overlay.append(backdrop, popupContent);

    const existingOverlay = document.querySelector(".popup-overlay");
    if (existingOverlay) {
        existingOverlay.remove();
    }

    document.body.append(overlay);
};

export { renderDialog };
