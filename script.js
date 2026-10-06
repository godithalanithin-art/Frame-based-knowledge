// ========================================
// FRAME BASED KNOWLEDGE REPRESENTATION
// ========================================


// PATIENT FRAME

let patientFrame = {

    frameName: "PATIENT",

    slots: {

        patientID: "P1001",
        name: "Tarun",
        gender: "Male",
        age: 26,
        phone: "1234567890",
        address: "Ajmer",
        disease: "Corona",
        bloodGroup: "O+"

    }

};


// DOCTOR FRAME

let doctorFrame = {

    frameName: "DOCTOR",

    slots: {

        doctorID: "D101",
        name: "Dr. Yash",
        specialization: "General Physician",
        experience: "8 Years"

    }

};


// ROOM FRAME

let roomFrame = {

    frameName: "ROOM",

    slots: {

        roomNumber: "11",
        roomType: "Personal Room",
        price: 5000,
        status: "Available"

    }

};


// ADMISSION FRAME

let admissionFrame = {

    frameName: "ADMISSION",

    slots: {

        patientID: "P1001",
        doctor: "Dr. Yash",
        roomNumber: "11",
        checkIn: "",
        checkOut: ""

    }

};


// BILLING FRAME

let billingFrame = {

    frameName: "BILLING",

    slots: {

        patientID: "P1001",
        roomCharges: 5000,
        doctorCharges: 2000,
        medicineCharges: 1500,
        total: 0

    }

};


// ========================================
// SHOW FRAME
// ========================================

function showFrame(frameName) {

    let frames = document.querySelectorAll(".frame");

    frames.forEach(function(frame) {

        frame.classList.add("hidden");

    });


    document
        .getElementById(frameName)
        .classList.remove("hidden");

}


// ========================================
// SAVE PATIENT FRAME
// ========================================

function savePatient() {

    let gender =
        document.querySelector(
            'input[name="gender"]:checked'
        ).value;


    patientFrame.slots.patientID =
        document.getElementById("patientId").value;

    patientFrame.slots.name =
        document.getElementById("patientName").value;

    patientFrame.slots.gender = gender;

    patientFrame.slots.age =
        document.getElementById("age").value;

    patientFrame.slots.phone =
        document.getElementById("phone").value;

    patientFrame.slots.address =
        document.getElementById("address").value;

    patientFrame.slots.disease =
        document.getElementById("disease").value;

    patientFrame.slots.bloodGroup =
        document.getElementById("blood").value;


    document.getElementById("patientOutput").innerHTML =

        "<h3>Patient Frame Stored Successfully</h3>" +

        "<p><b>Patient ID:</b> " +
        patientFrame.slots.patientID +
        "</p>" +

        "<p><b>Name:</b> " +
        patientFrame.slots.name +
        "</p>" +

        "<p><b>Gender:</b> " +
        patientFrame.slots.gender +
        "</p>" +

        "<p><b>Age:</b> " +
        patientFrame.slots.age +
        "</p>" +

        "<p><b>Disease:</b> " +
        patientFrame.slots.disease +
        "</p>" +

        "<p><b>Blood Group:</b> " +
        patientFrame.slots.bloodGroup +
        "</p>";

}


// ========================================
// SAVE DOCTOR FRAME
// ========================================

function saveDoctor() {

    doctorFrame.slots.doctorID =
        document.getElementById("doctorId").value;

    doctorFrame.slots.name =
        document.getElementById("doctorName").value;

    doctorFrame.slots.specialization =
        document.getElementById("specialization").value;

    doctorFrame.slots.experience =
        document.getElementById("experience").value;


    document.getElementById("doctorOutput").innerHTML =

        "<h3>Doctor Frame Stored Successfully</h3>" +

        "<p><b>Doctor ID:</b> " +
        doctorFrame.slots.doctorID +
        "</p>" +

        "<p><b>Name:</b> " +
        doctorFrame.slots.name +
        "</p>" +

        "<p><b>Specialization:</b> " +
        doctorFrame.slots.specialization +
        "</p>" +

        "<p><b>Experience:</b> " +
        doctorFrame.slots.experience +
        "</p>";

}


// ========================================
// SAVE ROOM FRAME
// ========================================

function saveRoom() {

    roomFrame.slots.roomNumber =
        document.getElementById("roomNo").value;

    roomFrame.slots.roomType =
        document.getElementById("roomType").value;

    roomFrame.slots.price =
        document.getElementById("roomPrice").value;

    roomFrame.slots.status =
        document.getElementById("roomStatus").value;


    document.getElementById("roomOutput").innerHTML =

        "<h3>Room Frame Stored Successfully</h3>" +

        "<p><b>Room Number:</b> " +
        roomFrame.slots.roomNumber +
        "</p>" +

        "<p><b>Room Type:</b> " +
        roomFrame.slots.roomType +
        "</p>" +

        "<p><b>Price:</b> ₹" +
        roomFrame.slots.price +
        "</p>" +

        "<p><b>Status:</b> " +
        roomFrame.slots.status +
        "</p>";

}


// ========================================
// SAVE ADMISSION FRAME
// ========================================

function saveAdmission() {

    admissionFrame.slots.patientID =
        document.getElementById("adPatient").value;

    admissionFrame.slots.doctor =
        document.getElementById("adDoctor").value;

    admissionFrame.slots.roomNumber =
        document.getElementById("adRoom").value;

    admissionFrame.slots.checkIn =
        document.getElementById("checkIn").value;

    admissionFrame.slots.checkOut =
        document.getElementById("checkOut").value;


    document.getElementById("admissionOutput").innerHTML =

        "<h3>Admission Frame Stored Successfully</h3>" +

        "<p><b>Patient ID:</b> " +
        admissionFrame.slots.patientID +
        "</p>" +

        "<p><b>Doctor:</b> " +
        admissionFrame.slots.doctor +
        "</p>" +

        "<p><b>Room:</b> " +
        admissionFrame.slots.roomNumber +
        "</p>" +

        "<p><b>Check In:</b> " +
        admissionFrame.slots.checkIn +
        "</p>" +

        "<p><b>Check Out:</b> " +
        admissionFrame.slots.checkOut +
        "</p>";

}


// ========================================
// BILL CALCULATION
// ========================================

function calculateBill() {

    let room =
        Number(document.getElementById("roomCharges").value);

    let doctor =
        Number(document.getElementById("doctorCharges").value);

    let medicine =
        Number(document.getElementById("medicineCharges").value);


    let total = room + doctor + medicine;


    billingFrame.slots.patientID =
        document.getElementById("billPatient").value;

    billingFrame.slots.roomCharges = room;

    billingFrame.slots.doctorCharges = doctor;

    billingFrame.slots.medicineCharges = medicine;

    billingFrame.slots.total = total;


    document.getElementById("billOutput").innerHTML =

        "<h3>Hospital Bill</h3>" +

        "<p><b>Patient ID:</b> " +
        billingFrame.slots.patientID +
        "</p>" +

        "<p><b>Room Charges:</b> ₹" +
        room +
        "</p>" +

        "<p><b>Doctor Charges:</b> ₹" +
        doctor +
        "</p>" +

        "<p><b>Medicine Charges:</b> ₹" +
        medicine +
        "</p>" +

        "<hr>" +

        "<p><b>Total Amount:</b> ₹" +
        total +
        "</p>";

}