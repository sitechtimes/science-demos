let te = []; // holds all species numbers
let i = []; // store plot data and text field data from var l
let l = {
  tabComp1: {},
  tabComp2: {},
  touchPad: {},
  conditions: {},
  resetBtn: {},
  advanceBtn: {},
  restartBtn: {},
  exprtBtn: {},
  controlBtn: {},
  cameraIcon1: {},
  cameraIcon2: {},
  graphCntrl1: {},
  checkBox1: {},
  checkBox2: {},
  sliderComp1: {},
  sliderComp2: {},
  sliderComp3: {},
  sliderComp4: {},
  sliderComp5: {},
  sliderComp6: {},
  sliderComp7: {},
  sliderComp8: {},
  sliderComp9: {},
  sliderComp10: {},
  sliderComp11: {},
  sliderComp12: {},
  tField1: {},
  tField2: {},
  tField3: {},
  tField4: {},
  tField5: {},
  tField6: {},
  tField7: {},
  tField8: {},
  tField9: {},
  tField10: {},
  tField11: {},
  tField12: {},
  plotStaghorn: {},
  plotStarCoral: {},
  plotSponge: {},
  plotAlgae: {},
  plotPrrtfish: {},
  plotAngelfish: {},
  plotSnapper: {},
  plotGrouper: {},
  plotUrchin: {},
  plotTurtle: {},
  plotLionfish: {},
  plotThorns: {},
  graph1: {},
  graphXLabel: {},
  graphYLabel: {},
  summaryMssg: {},
};

function currentArrVal() {
  // calculations 2
  var e, a;
  (te = new Object()),
    (e = 2.1 * sediment1() * (0.5 + 0.5 * sediment2())),
    (a = 0.001),
    (te.algae = new Array(e, a, 0, 0)),
    (e = 0.3 * (0.8 + 0.25 * sediment1() - sediment3())),
    (a = 0.002),
    (te.sponge = new Array(e, a, 0, 0)),
    (e =
      0.3 *
      (1 - coralStress()) *
      waterTemp() *
      phEffect() *
      sediment2() *
      (1 - 0.5 * sediment3())),
    (a = 0.002),
    (te.staghorn = new Array(e, a, 0, 0)),
    (e =
      0.07 *
      (1 - coralStress() / 2) *
      waterTemp() *
      phEffect() *
      sediment2() *
      (1 - 0.5 * sediment3())),
    (a = 8e-4),
    (te.star = new Array(e, a, 0, 0)),
    (te.urchin = new Array(0, 0, 5e-4, 0.2)),
    (te.parrot = new Array(0, 0.0015, 0.001, 0.094 + iVal6() / 100)),
    (te.angel = new Array(0, 0.0011, 0.0014, 0.02 + (0.71 * iVal6()) / 100)),
    (te.turtle = new Array(0, 0, 4e-4, 0.025 + (0.45 * iVal6()) / 100)),
    (te.grouper = new Array(
      0,
      0.002,
      4e-4,
      0.12 + (iVal6() + 1.6 * i[7].obj.getValue()) / 100 / 8
    )),
    (te.snapper = new Array(
      0,
      0.002,
      49e-5,
      0.0542 + (iVal6() + 0.9 * i[8].obj.getValue()) / 100 / 3
    )),
    (te.lion = new Array(0, 0, 0.0015, 0.1 + iVal6() / 100 / 3)),
    (te.thorns = new Array(0, 0, 0.011 * sediment1(), 0.1));
}

function sediment1() {
  // calculations
  return (
    (0.2 * i[3].obj.getValue() +
      0.4 * i[5].obj.getValue() +
      0.3 * i[4].obj.getValue()) /
      100 +
    0.1
  );
}

function sediment2() {
  //  calc
  return (
    1 -
    (0.5 * sediment3() + 0.4 * sediment1() + (0.1 * i[0].obj.getValue()) / 100)
  );
}

function sediment3() {
  // calculations
  return (
    (0.6 * i[3].obj.getValue() +
      0.3 * i[5].obj.getValue() +
      0.05 * i[4].obj.getValue() +
      0.05 * i[0].obj.getValue()) /
    100
  );
}

function coralStress() {
  // calc
  return (
    (sediment3() +
      sediment1() +
      s / 100 +
      iVal6() / 100 +
      3 * (1 - waterTemp()) +
      3 * (1 - phEffect())) /
    10
  );
}

function waterTemp() {
  // array of water temp effect on organism ?
  return [
    0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
    0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
  ][Math.round(i[1].obj.getValue() - 18)];
}

function phEffect() {
  // calculations based on ph
  var e, a;
  return (
    7.6 <= (a = i[2].obj.getValue()) && a < 7.7
      ? (e = 0.05)
      : 7.6 <= a && a < 7.7
        ? (e = 0.11)
        : 7.7 <= a && a < 7.8
          ? (e = 0.23)
          : 7.8 <= a && a < 7.9
            ? (e = 0.42)
            : 7.9 <= a && a < 8
              ? (e = 0.69)
              : 8 <= a && a < 8.1
                ? (e = 1)
                : 8.1 <= a && (e = 1),
    e
  );
}

function iVal6() {
  return Number(i[6].obj.getValue());
}
