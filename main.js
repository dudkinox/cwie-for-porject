function nextForm2() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let stdID = document.getElementById("stdID");
  let studytime = document.getElementById("studytime");
  let program = document.getElementById("program");
  let major = document.getElementById("major");
  let faculty = document.getElementById("faculty");
  let gpax = document.getElementById("gpax");
  let totalcredit = document.getElementById("totalcredit");
  let teacher = document.getElementById("teacher");
  let email = document.getElementById("email");

  if (fname.value !== "" && lname.value !== "" && stdID.value !== "" && studytime !== "" && program.value !== "" && major.value !== "" && faculty.value !== "" && gpax.value !== "" && totalcredit.value !== "" && teacher.value !== "" && email.value !== "") {
    document.getElementById("address").disabled = false;
    document.getElementById("road").disabled = false;
    document.getElementById("sub_district").disabled = false;
    document.getElementById("district").disabled = false;
    document.getElementById("province").disabled = false;
    document.getElementById("postcode").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("phoneno").disabled = false;
    document.getElementById("address-next").disabled = false;
    document.getElementById("first").className =
      "card-header bg-success text-white";
    document.getElementById("address-body").className =
      "card-body";
  }
}
function nextForm3() {
  let address = document.getElementById("address");
  let road = document.getElementById("road");
  let sub_district = document.getElementById("sub_district");
  let district = document.getElementById("district");
  let province = document.getElementById("province");
  let postcode = document.getElementById("postcode");
  let phone = document.getElementById("phone");
  let phoneno = document.getElementById("phoneno");

  if (address.value !== "" && road.value !== "" && sub_district.value !== "" && district.value !== "" && province.value !== "" && postcode.value !== "" && phone.value !== "" && phoneno.value !== "") {
    document.getElementById("name_parent").disabled = false;
    document.getElementById("relation").disabled = false;
    document.getElementById("sub_district_parent").disabled = false;
    document.getElementById("district_parent").disabled = false;
    document.getElementById("province_parent").disabled = false;
    document.getElementById("postcode_parent").disabled = false;
    document.getElementById("phone_parent").disabled = false;
    document.getElementById("phoneno_parent").disabled = false;
    document.getElementById("parent-next").disabled = false;
    document.getElementById("second").className =
      "card-header bg-success text-white";
    document.getElementById("address-body-parent").className =
      "card-body";
  }
}

function nextForm4() {
  let name_parent = document.getElementById("name_parent");
  let relation = document.getElementById("relation");
  let sub_district_parent = document.getElementById("sub_district_parent");
  let district_parent = document.getElementById("district_parent");
  let province_parent = document.getElementById("province_parent");
  let postcode_parent = document.getElementById("postcode_parent");
  let phone_parent = document.getElementById("phone_parent");
  let phoneno_parent = document.getElementById("phoneno_parent");

  if (name_parent.value !== "" && relation.value !== "" && sub_district_parent.value !== "" && district_parent.value !== "" && province_parent.value !== "" && postcode_parent.value !== "" && phone_parent.value !== "" && phoneno_parent.value !== "") {
    document.getElementById("special_ability").disabled = false;
    document.getElementById("activity").disabled = false;
    document.getElementById("role").disabled = false;
    document.getElementById("saveall").disabled = false;
    document.getElementById("third").className =
      "card-header bg-success text-white";
    document.getElementById("address-body-parent").className =
      "card-body";
  }
}