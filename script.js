let province = []
let amphure = []
let zipcode = []

const urlProvince = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json";
const urlDistrict = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json";
const urlSubDistrict = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json";

function provinceFetch(idProvince, idDistrict) {
    document.addEventListener("DOMContentLoaded", function () {
        var apiUrl = urlProvince;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                provinceDropdown(idProvince, idDistrict, data);
                province = data
            })
            .catch(error => console.error("เกิดข้อผิดพลาด:", error));
    });
}

function amphureFetch() {
    document.addEventListener("DOMContentLoaded", function () {
        var apiUrl = urlDistrict;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                DropdownAmphur("district-select", data);
                DropdownAmphur("district-parent-select", data);
                amphure = data
            })
            .catch((error) => console.log("เกิดข้อผิดพลาด:", error));
    });
}
amphureFetch();

function subFecth() {
    document.addEventListener("DOMContentLoaded", function () {
        var apiUrl = urlSubDistrict;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                Dropdownsub("sub-select", data);
                Dropdownsub("sub-parent-select", data);
                zipcode = data
            })
            .catch((error) => console.log("เกิดข้อผิดพลาด:", error));
    });
}
subFecth();

function provinceDropdown(province_id, district_id, data) {
    var dropdownElement = document.getElementById(province_id);
    data.forEach(item => {
        var option = document.createElement("option");
        option.value = item.name_th;
        dropdownElement.appendChild(option);
    });
    dropdownElement.addEventListener('change', function () {
        const response = data.filter((item) =>
            item.name_th === dropdownElement.value)
        DropdownAmphur(district_id, response);
    });
}


function DropdownAmphur(elem_id, selectedValue) {
    var dropdownElement = document.getElementById(elem_id);

    var defaultOption = document.createElement("option");
    defaultOption.value = '';
    defaultOption.text = 'Select an option';
    dropdownElement.appendChild(defaultOption);
    var apiUrlDropdown2 = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json";

    fetch(apiUrlDropdown2)
        .then(response => response.json())
        .then(data => {

            data.forEach(item => {
                var option = document.createElement("option");
                if (item.province_id == selectedValue) {
                    option.value = item.name_th;
                    dropdownElement.appendChild(option);
                }
            });
        })
        .catch(error => console.error("เกิดข้อผิดพลาด:", error));
}

function Dropdownsub(sub_id, selectedValue) {
    var dropdownElement = document.getElementById(sub_id);

    var defaultOption = document.createElement("option");
    defaultOption.value = '';
    defaultOption.text = 'Select an option';
    dropdownElement.appendChild(defaultOption);
    var apiUrlDropdown3 = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json";

    fetch(apiUrlDropdown3)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var option = document.createElement("option");
                if (item.amphure_id == selectedValue) {
                    option.value = item.name_th;
                    dropdownElement.appendChild(option);
                }
            });
        })
        .catch(error => console.error("เกิดข้อผิดพลาด:", error));


}

function provinceid(province_id, district_id) {
    provinceFetch();
    var dropdowncontry = document.getElementById(province_id).value
    const response = province.filter((item) =>
        item.name_th === dropdowncontry)[0].id
    DropdownAmphur(district_id, response);
}

function amphureid(amphure_id, sub_id) {
    amphureFetch();
    var dropdowncontry = document.getElementById(amphure_id).value
    const response = amphure.filter((item) => item.name_th === dropdowncontry)[0].id
    Dropdownsub(sub_id, response);
}

function zipcodeid(elementid, postcode_id) {
    subFecth();
    var dropdowncontry = document.getElementById(elementid).value
    const response = zipcode.filter((item) =>
        item.name_th === dropdowncontry)[0].zip_code
    document.getElementById(postcode_id).value = response;
}