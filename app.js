// https://calculator.swiftutors.com/return-on-assets-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonAssetsRatioRadio = document.getElementById('returnonAssetsRatioRadio');
const annualNetIncomeRadio = document.getElementById('annualNetIncomeRadio');
const averageTotalAssetsRadio = document.getElementById('averageTotalAssetsRadio');

let returnonAssetsRatio;
let annualNetIncome = v1;
let averageTotalAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

returnonAssetsRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Net Income';
  variable2.textContent = 'Average Total Assets';
  annualNetIncome = v1;
  averageTotalAssets = v2;
  result.textContent = '';
});

annualNetIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Assets Ratio';
  variable2.textContent = 'Average Total Assets';
  returnonAssetsRatio = v1;
  averageTotalAssets = v2;
  result.textContent = '';
});

averageTotalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Assets Ratio';
  variable2.textContent = 'Annual Net Income';
  returnonAssetsRatio = v1;
  annualNetIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonAssetsRatioRadio.checked)
    result.textContent = `Return on Assets Ratio = ${computeReturnonAssetsRatio().toFixed(2)} %`;

  else if(annualNetIncomeRadio.checked)
    result.textContent = `Annual Net Income = ${computeAnnualNetIncome().toFixed(2)}`;

  else if(averageTotalAssetsRadio.checked)
    result.textContent = `Average Total Assets = ${computeAverageTotalAssets().toFixed(2)}`;
})

// calculation

function computeReturnonAssetsRatio() {
  return (Number(annualNetIncome.value) / Number(averageTotalAssets.value)) * 100;
}

function computeAnnualNetIncome() {
  return (Number(returnonAssetsRatio.value) / 100) * Number(averageTotalAssets.value);
}

function computeAverageTotalAssets() {
  return Number(annualNetIncome.value) / (Number(returnonAssetsRatio.value) / 100);
}