pragma solidity ^0.4.11;

contract BankstatmentContract {
    struct PersonalInfoStruct {
        bytes32 person;
    }

    PersonalInfoStruct public personalInfoStructs;

    function SetCustomerInfo(bytes32 info) public {
        personalInfoStructs.person = info;
    }
}

    