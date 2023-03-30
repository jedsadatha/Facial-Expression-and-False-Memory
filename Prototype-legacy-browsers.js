/****************** 
 * Prototype Test *
 ******************/


// store info about the experiment session:
let expName = 'Prototype';  // from the Builder filename that created this script
let expInfo = {'participant': 'Your Name', 'Sex (M,F)': '', 'Age': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(ThankRoutineBegin());
flowScheduler.add(ThankRoutineEachFrame());
flowScheduler.add(ThankRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Pictures/M23A.jpg', 'path': 'Pictures/M23A.jpg'},
    {'name': 'Pictures/M22M.jpg', 'path': 'Pictures/M22M.jpg'},
    {'name': 'Pictures/M18A.jpg', 'path': 'Pictures/M18A.jpg'},
    {'name': 'ImageAnsSet5.xlsx', 'path': 'ImageAnsSet5.xlsx'},
    {'name': 'Pictures/M10M.jpg', 'path': 'Pictures/M10M.jpg'},
    {'name': 'Pictures/F23A.jpg', 'path': 'Pictures/F23A.jpg'},
    {'name': 'ImageShowSet1.xlsx', 'path': 'ImageShowSet1.xlsx'},
    {'name': 'Pictures/F27M.jpg', 'path': 'Pictures/F27M.jpg'},
    {'name': 'Pictures/F11M.jpg', 'path': 'Pictures/F11M.jpg'},
    {'name': 'Pictures/M23M.jpg', 'path': 'Pictures/M23M.jpg'},
    {'name': 'Pictures/M9A.jpg', 'path': 'Pictures/M9A.jpg'},
    {'name': 'Pictures/F2M.jpg', 'path': 'Pictures/F2M.jpg'},
    {'name': 'Pictures/F3A.jpg', 'path': 'Pictures/F3A.jpg'},
    {'name': 'Pictures/F25A.jpg', 'path': 'Pictures/F25A.jpg'},
    {'name': 'Pictures/M24A.jpg', 'path': 'Pictures/M24A.jpg'},
    {'name': 'Pictures/F25M.jpg', 'path': 'Pictures/F25M.jpg'},
    {'name': 'Pictures/F6A.jpg', 'path': 'Pictures/F6A.jpg'},
    {'name': 'ImageAnsSet2.xlsx', 'path': 'ImageAnsSet2.xlsx'},
    {'name': 'Pictures/M7A.jpg', 'path': 'Pictures/M7A.jpg'},
    {'name': 'Pictures/F11A.jpg', 'path': 'Pictures/F11A.jpg'},
    {'name': 'Pictures/F24M.jpg', 'path': 'Pictures/F24M.jpg'},
    {'name': 'Pictures/M6A.jpg', 'path': 'Pictures/M6A.jpg'},
    {'name': 'Pictures/F7M.jpg', 'path': 'Pictures/F7M.jpg'},
    {'name': 'Pictures/F19M.jpg', 'path': 'Pictures/F19M.jpg'},
    {'name': 'Pictures/M11M.jpg', 'path': 'Pictures/M11M.jpg'},
    {'name': 'Pictures/F8A.jpg', 'path': 'Pictures/F8A.jpg'},
    {'name': 'Pictures/M27M.jpg', 'path': 'Pictures/M27M.jpg'},
    {'name': 'ImageShowSet2.xlsx', 'path': 'ImageShowSet2.xlsx'},
    {'name': 'Pictures/F3M.jpg', 'path': 'Pictures/F3M.jpg'},
    {'name': 'ImageShowSet4.xlsx', 'path': 'ImageShowSet4.xlsx'},
    {'name': 'Pictures/M1M.jpg', 'path': 'Pictures/M1M.jpg'},
    {'name': 'Pictures/F22M.jpg', 'path': 'Pictures/F22M.jpg'},
    {'name': 'Pictures/M2A.jpg', 'path': 'Pictures/M2A.jpg'},
    {'name': 'Pictures/F1M.jpg', 'path': 'Pictures/F1M.jpg'},
    {'name': 'Pictures/M27A.jpg', 'path': 'Pictures/M27A.jpg'},
    {'name': 'Pictures/M25A.jpg', 'path': 'Pictures/M25A.jpg'},
    {'name': 'Pictures/F6M.jpg', 'path': 'Pictures/F6M.jpg'},
    {'name': 'Pictures/M9M.jpg', 'path': 'Pictures/M9M.jpg'},
    {'name': 'ImageAnsSet6.xlsx', 'path': 'ImageAnsSet6.xlsx'},
    {'name': 'Pictures/M17A.jpg', 'path': 'Pictures/M17A.jpg'},
    {'name': 'Pictures/F26A.jpg', 'path': 'Pictures/F26A.jpg'},
    {'name': 'ImageList.xlsx', 'path': 'ImageList.xlsx'},
    {'name': 'ImageAnsSet4.xlsx', 'path': 'ImageAnsSet4.xlsx'},
    {'name': 'Pictures/M26M.jpg', 'path': 'Pictures/M26M.jpg'},
    {'name': 'Pictures/F10A.jpg', 'path': 'Pictures/F10A.jpg'},
    {'name': 'Pictures/M10A.jpg', 'path': 'Pictures/M10A.jpg'},
    {'name': 'Pictures/M19A.jpg', 'path': 'Pictures/M19A.jpg'},
    {'name': 'Pictures/F27A.jpg', 'path': 'Pictures/F27A.jpg'},
    {'name': 'Pictures/F7A.jpg', 'path': 'Pictures/F7A.jpg'},
    {'name': 'Pictures/M18M.jpg', 'path': 'Pictures/M18M.jpg'},
    {'name': 'Pictures/M22A.jpg', 'path': 'Pictures/M22A.jpg'},
    {'name': 'Pictures/M3A.jpg', 'path': 'Pictures/M3A.jpg'},
    {'name': 'ImageShowSet5.xlsx', 'path': 'ImageShowSet5.xlsx'},
    {'name': 'Pictures/M6M.jpg', 'path': 'Pictures/M6M.jpg'},
    {'name': 'Pictures/F9A.jpg', 'path': 'Pictures/F9A.jpg'},
    {'name': 'Pictures/M17M.jpg', 'path': 'Pictures/M17M.jpg'},
    {'name': 'Pictures/F19A.jpg', 'path': 'Pictures/F19A.jpg'},
    {'name': 'Pictures/F17M.jpg', 'path': 'Pictures/F17M.jpg'},
    {'name': 'Pictures/M26A.jpg', 'path': 'Pictures/M26A.jpg'},
    {'name': 'Pictures/F23M.jpg', 'path': 'Pictures/F23M.jpg'},
    {'name': 'Pictures/M8A.jpg', 'path': 'Pictures/M8A.jpg'},
    {'name': 'Pictures/F18A.jpg', 'path': 'Pictures/F18A.jpg'},
    {'name': 'ImageAnsSet3.xlsx', 'path': 'ImageAnsSet3.xlsx'},
    {'name': 'Pictures/F9M.jpg', 'path': 'Pictures/F9M.jpg'},
    {'name': 'Pictures/F8M.jpg', 'path': 'Pictures/F8M.jpg'},
    {'name': 'Pictures/M11A.jpg', 'path': 'Pictures/M11A.jpg'},
    {'name': 'ImageShowSet6.xlsx', 'path': 'ImageShowSet6.xlsx'},
    {'name': 'Pictures/F18M.jpg', 'path': 'Pictures/F18M.jpg'},
    {'name': 'Pictures/F22A.jpg', 'path': 'Pictures/F22A.jpg'},
    {'name': 'Pictures/M3M.jpg', 'path': 'Pictures/M3M.jpg'},
    {'name': 'ImageShowSet3.xlsx', 'path': 'ImageShowSet3.xlsx'},
    {'name': 'Pictures/F24A.jpg', 'path': 'Pictures/F24A.jpg'},
    {'name': 'Pictures/F17A.jpg', 'path': 'Pictures/F17A.jpg'},
    {'name': 'Pictures/F10M.jpg', 'path': 'Pictures/F10M.jpg'},
    {'name': 'Pictures/F1A.jpg', 'path': 'Pictures/F1A.jpg'},
    {'name': 'Pictures/M25M.jpg', 'path': 'Pictures/M25M.jpg'},
    {'name': 'Pictures/M2M.jpg', 'path': 'Pictures/M2M.jpg'},
    {'name': 'Pictures/F26M.jpg', 'path': 'Pictures/F26M.jpg'},
    {'name': 'Pictures/M8M.jpg', 'path': 'Pictures/M8M.jpg'},
    {'name': 'Pictures/M7M.jpg', 'path': 'Pictures/M7M.jpg'},
    {'name': 'ImageAnsSet1.xlsx', 'path': 'ImageAnsSet1.xlsx'},
    {'name': 'Pictures/M19M.jpg', 'path': 'Pictures/M19M.jpg'},
    {'name': 'Pictures/M1A.jpg', 'path': 'Pictures/M1A.jpg'},
    {'name': 'Pictures/M24M.jpg', 'path': 'Pictures/M24M.jpg'},
    {'name': 'Pictures/F2A.jpg', 'path': 'Pictures/F2A.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var IntroClock;
var intro;
var key_resp_2;
var CountdownClock;
var count3;
var count2;
var Count1;
var CountGo;
var ShowImageClock;
var image_2;
var Break_2Clock;
var text_3;
var key_resp_3;
var ShowAnsImageClock;
var image;
var AnsClock;
var text_2;
var key_resp;
var ThankClock;
var text_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro',
    text: '6 sets of pictures will be shown.\n\nAfter you look at the pictures of people with different expression, you will be asked to identify the pictures from the shown pictures.\n\nPress ’o’ if you see the same person with the same expression\n\nPress ’n’ if you see the same person with the different expression\n\nPress ’space’ to start the experiment',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Countdown"
  CountdownClock = new util.Clock();
  count3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  count2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'count2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Count1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Count1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  CountGo = new visual.TextStim({
    win: psychoJS.window,
    name: 'CountGo',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ShowImage"
  ShowImageClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.75],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Break_2"
  Break_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ShowAnsImage"
  ShowAnsImageClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.0, 0.75],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Ans"
  AnsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thank"
  ThankClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Thank you!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro'-------
    t = 0;
    IntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(intro);
    IntroComponents.push(key_resp_2);
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro'-------
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro* updates
    if (t >= 0.0 && intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro.tStart = t;  // (not accounting for frame time here)
      intro.frameNStart = frameN;  // exact frame index
      
      intro.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro'-------
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_3;
var currentLoop;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ImageList.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(CountdownRoutineBegin(snapshot));
      trials_3LoopScheduler.add(CountdownRoutineEachFrame());
      trials_3LoopScheduler.add(CountdownRoutineEnd());
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      trials_3LoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      trials_3LoopScheduler.add(trials_2LoopScheduler);
      trials_3LoopScheduler.add(trials_2LoopEnd);
      trials_3LoopScheduler.add(Break_2RoutineBegin(snapshot));
      trials_3LoopScheduler.add(Break_2RoutineEachFrame());
      trials_3LoopScheduler.add(Break_2RoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_3LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_3LoopScheduler.add(trialsLoopScheduler);
      trials_3LoopScheduler.add(trialsLoopEnd);
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: PicSet,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(ShowImageRoutineBegin(snapshot));
      trials_2LoopScheduler.add(ShowImageRoutineEachFrame());
      trials_2LoopScheduler.add(ShowImageRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: AnsSet,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(ShowAnsImageRoutineBegin(snapshot));
      trialsLoopScheduler.add(ShowAnsImageRoutineEachFrame());
      trialsLoopScheduler.add(ShowAnsImageRoutineEnd());
      trialsLoopScheduler.add(AnsRoutineBegin(snapshot));
      trialsLoopScheduler.add(AnsRoutineEachFrame());
      trialsLoopScheduler.add(AnsRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var CountdownComponents;
function CountdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Countdown'-------
    t = 0;
    CountdownClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    count3.setText('3');
    count2.setText('2');
    Count1.setText('1');
    CountGo.setText('Go');
    // keep track of which components have finished
    CountdownComponents = [];
    CountdownComponents.push(count3);
    CountdownComponents.push(count2);
    CountdownComponents.push(Count1);
    CountdownComponents.push(CountGo);
    
    CountdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function CountdownRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Countdown'-------
    // get current time
    t = CountdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *count3* updates
    if (t >= 0.0 && count3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count3.tStart = t;  // (not accounting for frame time here)
      count3.frameNStart = frameN;  // exact frame index
      
      count3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (count3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count3.setAutoDraw(false);
    }
    
    // *count2* updates
    if (t >= 1.0 && count2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      count2.tStart = t;  // (not accounting for frame time here)
      count2.frameNStart = frameN;  // exact frame index
      
      count2.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (count2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      count2.setAutoDraw(false);
    }
    
    // *Count1* updates
    if (t >= 2.0 && Count1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Count1.tStart = t;  // (not accounting for frame time here)
      Count1.frameNStart = frameN;  // exact frame index
      
      Count1.setAutoDraw(true);
    }

    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Count1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Count1.setAutoDraw(false);
    }
    
    // *CountGo* updates
    if (t >= 3.0 && CountGo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CountGo.tStart = t;  // (not accounting for frame time here)
      CountGo.frameNStart = frameN;  // exact frame index
      
      CountGo.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CountGo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CountGo.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CountdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CountdownRoutineEnd() {
  return async function () {
    //------Ending Routine 'Countdown'-------
    CountdownComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var ShowImageComponents;
function ShowImageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ShowImage'-------
    t = 0;
    ShowImageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    image_2.setImage(ImageSetShow);
    // keep track of which components have finished
    ShowImageComponents = [];
    ShowImageComponents.push(image_2);
    
    ShowImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ShowImageRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ShowImage'-------
    // get current time
    t = ShowImageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ShowImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShowImageRoutineEnd() {
  return async function () {
    //------Ending Routine 'ShowImage'-------
    ShowImageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Break_2Components;
function Break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Break_2'-------
    t = 0;
    Break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_3.setText('Press ’o’ when seeing the same person with the same expression\n\nPress ’n’ when seeing the same person with different expression\n\nPress ‘space’ when ready');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Break_2Components = [];
    Break_2Components.push(text_3);
    Break_2Components.push(key_resp_3);
    
    Break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Break_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Break_2'-------
    // get current time
    t = Break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Break_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Break_2'-------
    Break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ShowAnsImageComponents;
function ShowAnsImageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ShowAnsImage'-------
    t = 0;
    ShowAnsImageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    image.setImage(ImageAnsShow);
    // keep track of which components have finished
    ShowAnsImageComponents = [];
    ShowAnsImageComponents.push(image);
    
    ShowAnsImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ShowAnsImageRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ShowAnsImage'-------
    // get current time
    t = ShowAnsImageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ShowAnsImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShowAnsImageRoutineEnd() {
  return async function () {
    //------Ending Routine 'ShowAnsImage'-------
    ShowAnsImageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var AnsComponents;
function AnsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ans'-------
    t = 0;
    AnsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setText('New ’n’\n\nor \n\nOld ‘o’');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    AnsComponents = [];
    AnsComponents.push(text_2);
    AnsComponents.push(key_resp);
    
    AnsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AnsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ans'-------
    // get current time
    t = AnsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['o', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == Correct) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AnsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AnsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Ans'-------
    AnsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(Correct)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Ans" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ThankComponents;
function ThankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Thank'-------
    t = 0;
    ThankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ThankComponents = [];
    ThankComponents.push(text_5);
    
    ThankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ThankRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Thank'-------
    // get current time
    t = ThankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ThankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankRoutineEnd() {
  return async function () {
    //------Ending Routine 'Thank'-------
    ThankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
