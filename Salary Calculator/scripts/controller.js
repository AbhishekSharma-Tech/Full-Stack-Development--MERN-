const compute = document.getElementById("compute");

compute.addEventListener('click', () => {
    const bs = parseInt(document.getElementById("basicSalary").value);

    document.getElementById("HRA").innerText = salaryOP.house(bs);
    document.getElementById("TA").innerText = salaryOP.travel(bs);
    document.getElementById("MA").innerText = salaryOP.medical(bs);
    document.getElementById("DA").innerText = salaryOP.dear(bs);
    document.getElementById("PF").innerText = salaryOP.fund(bs);
    document.getElementById("Tax").innerText = salaryOP.tax(bs);
    document.getElementById("GS").innerText = salaryOP.gross(bs);
    document.getElementById("NS").innerText = salaryOP.net(bs);


    // 2nd Approach using functions
    // document.getElementById("HRA").innerText = house(bs);
    // document.getElementById("TA").innerText = travel(bs);
    // document.getElementById("MA").innerText = medical(bs);
    // document.getElementById("DA").innerText = dear(bs);
    // document.getElementById("PF").innerText = fund(bs);
    // document.getElementById("Tax").innerText = tax(bs);
    // document.getElementById("GS").innerText = gross(bs);
    // document.getElementById("NS").innerText = net(bs);
})

