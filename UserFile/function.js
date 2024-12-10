const postCompanyData=()=>{
    const input = document.createElement('input');
    input.type = 'file';
    input.accept='.xlsx';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const employeeZCodeLogin = Forguncy.Page.getCell('employeeZCodeLogin').getValue();
            const financialYearTargeted = Forguncy.Page.getCell('financialYearTargeted').getValue();
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            formData.append('financial_year',financialYearTargeted);
            formData.append('employee_z_code_login',employeeZCodeLogin);
            formData.append('file',file);
            xhr.open("POST",'http://172.30.128.109:3005/createlist',true);
            xhr.send(formData);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    const jsonResponse = JSON.parse(xhr.responseText);
                    alert(jsonResponse.value); // 取得したJSONデータをコンソールに出力
                    location.reload();
                }
            };
        };
    };
    input.click();
};