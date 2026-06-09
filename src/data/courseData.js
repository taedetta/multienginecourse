export const sections = [
  {
    id: 'aerodynamics',
    title: 'Single Engine Aerodynamics',
    subtitle: 'Critical Engine & PAST Factors',
    icon: '✈️',
    color: '#1e40af',
    description:
      'Learn why the left engine is critical in conventional multi-engine aircraft and master the four aerodynamic factors: P-Factor, Accelerated Slipstream, Spiraling Slipstream, and Torque.',
  },
  {
    id: 'vmc',
    title: 'VMC Table',
    subtitle: 'Control vs Performance Factors',
    icon: '📊',
    color: '#0f766e',
    description:
      'Understand how CG, bank angle, weight, power, density altitude, drag devices, and prop feathering affect VMC, control authority, and climb performance.',
  },
  {
    id: 'oral',
    title: 'BE58 Oral Review',
    subtitle: 'Baron 58 Checkride Prep',
    icon: '🎓',
    color: '#b45309',
    description:
      'Complete oral exam preparation covering engines, systems, airspeeds, fuel, landing gear, electrical, and emergency procedures for the Beechcraft Baron 58.',
  },
];

const aerodynamicsQuestions = [
  {
    question: 'What is the critical engine?',
    choices: [
      'The engine with the most hours since overhaul',
      'The engine whose failure most adversely affects performance or handling',
      'The right engine in all twin-engine aircraft',
      'The engine that produces the most horsepower',
    ],
    correct: 1,
    explanation:
      'The critical engine is the one whose failure would most adversely affect the performance or handling qualities of the aircraft. In conventional twins with clockwise-rotating props, this is the left engine due to all four PAST factors. Be able to explain WHY, not just memorize which engine.',
  },
  {
    question: 'What acronym helps remember the four critical engine factors?',
    choices: ['FAST', 'PAST', 'CAST', 'PATS'],
    correct: 1,
    explanation: 'PAST = P-Factor (yaw), Accelerated Slipstream (roll/pitch), Spiraling Slipstream (yaw/rudder effectiveness), Torque (roll). You should be able to define each factor and explain what happens when the left engine fails.',
  },
  {
    question: 'In a conventional multi-engine airplane, which engine is typically critical?',
    choices: ['Right engine', 'Left engine', 'Both equally', 'Neither — only jets have critical engines'],
    correct: 1,
    explanation:
      'Four factors make the left engine critical in conventional multi-engine airplanes with clockwise-rotating props.',
  },
  {
    question: 'P-Factor causes yaw because:',
    choices: [
      'Both blades produce equal thrust at all times',
      'The descending blade produces more thrust than the ascending blade',
      'The propeller stops rotating during engine failure',
      'High pressure air flows from right to left',
    ],
    correct: 1,
    explanation:
      'The descending blade has a higher angle of attack and produces more thrust. If the left engine fails, P-factor from the right engine is farther from the longitudinal axis, creating more yaw.',
  },
  {
    question: 'If the LEFT engine fails, P-factor from the operating RIGHT engine:',
    choices: [
      'Is closer to the longitudinal axis, reducing yaw',
      'Is farther from the longitudinal axis, increasing yaw',
      'Has no effect on yaw',
      'Eliminates the need for rudder input',
    ],
    correct: 1,
    explanation:
      'With the left engine failed, thrust asymmetry from the right engine acts at a greater distance from the centerline, increasing the yawing moment.',
  },
  {
    question: 'Accelerated slipstream affects the aircraft by:',
    choices: [
      'Creating extra lift from airflow over the wing from the operating engine',
      'Reducing all lift on both wings equally',
      'Only affecting the vertical stabilizer',
      'Eliminating induced drag completely',
    ],
    correct: 0,
    explanation:
      'Air forced over the wing by the operating engine creates extra lift. Airflow from the right engine creates more induced airflow and a longer arm, increasing rolling moment.',
  },
  {
    question: 'Spiraling slipstream from the LEFT propeller:',
    choices: [
      'Spirals away from the rudder, making it less effective',
      'Hits the rudder and makes it more effective',
      'Only affects the left wingtip',
      'Flows from low pressure to high pressure',
    ],
    correct: 1,
    explanation:
      'Spiraling air from the left propeller hits the rudder, increasing airflow over the rudder and making it more effective when the left engine is operating.',
  },
  {
    question: 'If the left engine fails, spiraling slipstream from the right engine:',
    choices: [
      'Hits the rudder directly',
      'Spirals away from the rudder',
      'Stops completely',
      'Reverses direction toward the fuselage',
    ],
    correct: 1,
    explanation:
      'With the left engine failed, spiraling slipstream from the right engine spirals away from the rudder, reducing rudder effectiveness.',
  },
  {
    question: 'Spiraling slipstream direction flows from:',
    choices: [
      'Low pressure to high pressure',
      'High pressure to low pressure (left to right in standard diagrams)',
      'Rudder to wingtip only',
      'Tail to nose only',
    ],
    correct: 1,
    explanation:
      'High pressure airflow pushes the low-pressure spiraling slipstream to the right. The descending blade produces low pressure; the ascending blade produces high pressure.',
  },
  {
    question: 'Torque in a conventional twin tries to roll the aircraft:',
    choices: [
      'In the same direction as propeller rotation',
      'Opposite to the propeller\'s direction of rotation',
      'Only during takeoff',
      'Only when both engines are at full power',
    ],
    correct: 1,
    explanation:
      'Torque is the opposite reaction to clockwise prop rotation. If the left engine fails, torque tries to roll the aircraft to the left.',
  },
  {
    question: 'Do all multi-engine aircraft have a critical engine?',
    choices: [
      'Yes, always the left engine',
      'No — counter-rotating prop aircraft do not have a critical engine',
      'Yes, always the right engine',
      'Only turbine twins have a critical engine',
    ],
    correct: 1,
    explanation:
      'Aircraft with counter-rotating props do not have a critical engine; loss of either engine has the same aerodynamic effect.',
  },
  {
    question: 'Which factor primarily affects YAW from P-factor?',
    choices: ['Roll only', 'Pitch only', 'Yaw', 'None — P-factor affects lift only'],
    correct: 2,
    explanation: 'P-factor creates asymmetric thrust that yaws the aircraft toward the failed engine side.',
  },
  {
    question: 'Accelerated slipstream primarily creates:',
    choices: ['Yaw only', 'Roll and pitch effects', 'Only drag reduction', 'No aerodynamic effect'],
    correct: 1,
    explanation: 'Accelerated slipstream from the operating engine creates extra lift and rolling moment.',
  },
  {
    question: 'The ascending propeller blade is at:',
    choices: [
      'High angle of attack, producing low pressure',
      'Low angle of attack, producing high pressure airflow',
      'Zero angle of attack always',
      'Maximum pitch always',
    ],
    correct: 1,
    explanation:
      'The ascending blade is at a lower angle of attack and produces high pressure airflow, contributing to the spiraling slipstream direction.',
  },
];

const vmcQuestions = [
  {
    question: 'VMC is best defined as:',
    choices: [
      'Maximum cruise speed with one engine',
      'Ratio of available engine power vs available rudder power',
      'Stall speed in landing configuration',
      'Best rate of climb speed single engine',
    ],
    correct: 1,
    explanation: 'VMC = ratio of available engine power vs available rudder power. On the Baron 58, published VMC is 84 kts (red line). Below this speed, you cannot maintain directional control with the critical engine inoperative. Study the full VMC table for all factors.',
  },
  {
    question: 'A forward CG generally:',
    choices: [
      'Raises VMC and decreases control',
      'Lowers VMC and increases control effectiveness',
      'Has no effect on VMC',
      'Lowers VMC but decreases control',
    ],
    correct: 1,
    explanation:
      'Forward CG lowers VMC (good) and increases control because the longer arm between CG and rudder provides more leverage.',
  },
  {
    question: 'Forward CG effect on performance (rate of climb):',
    choices: ['Increases', 'Decreases', 'No change', 'Doubles climb rate'],
    correct: 1,
    explanation:
      'Forward CG requires more downward force on the tail, adding to overall downward force and decreasing lift/performance.',
  },
  {
    question: 'Banking 3–5° toward the operating engine:',
    choices: [
      'Raises VMC and requires more rudder',
      'Lowers VMC and reduces rudder input needed',
      'Has no effect on control',
      'Causes immediate stall',
    ],
    correct: 1,
    explanation:
      'Banking toward the operating engine turns the aircraft in the same direction as required rudder input, so less rudder is needed.',
  },
  {
    question: 'Proper bank angle (3–5°) effect on performance:',
    choices: [
      'Decreases performance due to excess drag',
      'Increases performance by reducing sideslip and drag',
      'Has no performance effect',
      'Eliminates need for blue line',
    ],
    correct: 1,
    explanation:
      '3–5° bank reduces sideslip and drag. No bank causes more drag; over-banking (>5°) decreases performance.',
  },
  {
    question: 'Increased weight (when banking) effect on VMC:',
    choices: ['Raises VMC', 'Lowers VMC', 'No effect', 'Eliminates VMC'],
    correct: 1,
    explanation:
      'More weight requires more lift; increased vertical lift component works in the same direction as rudder, requiring less rudder input.',
  },
  {
    question: 'Lower power setting effect on VMC:',
    choices: [
      'Raises VMC',
      'Lowers VMC',
      'No effect',
      'Only affects performance, not VMC',
    ],
    correct: 1,
    explanation: 'Lower power creates less asymmetric turning, requiring less rudder input — lowering VMC.',
  },
  {
    question: 'Lower power effect on climb performance:',
    choices: ['Increases climb', 'Decreases climb', 'No effect', 'Doubles climb rate'],
    correct: 1,
    explanation: 'Lower power decreases climb performance.',
  },
  {
    question: 'Higher density altitude effect on VMC:',
    choices: [
      'Raises VMC significantly',
      'Lowers VMC and increases control',
      'Only affects performance',
      'Eliminates rudder effectiveness',
    ],
    correct: 1,
    explanation:
      'Higher DA means less air over wing/prop (less turning tendency) but rudder remains effective, so control increases and VMC lowers.',
  },
  {
    question: 'Extended drag devices (gear & flaps) effect on VMC:',
    choices: [
      'Raise VMC by increasing asymmetric thrust',
      'Lower VMC by interrupting prop slipstream and reducing asymmetric turning',
      'Have no VMC effect',
      'Only affect multi-engine cruise',
    ],
    correct: 1,
    explanation:
      'Gear and flaps interrupt the reward-flowing airstream of the prop, reducing asymmetric turning tendency.',
  },
  {
    question: 'Feathered prop effect on VMC:',
    choices: [
      'Raises VMC',
      'Lowers VMC by reducing yaw toward the dead engine',
      'No effect',
      'Stops the aircraft immediately',
    ],
    correct: 1,
    explanation: 'A feathered prop reduces yaw toward the dead engine, lowering VMC and decreasing drag.',
  },
  {
    question: 'Which factor LOWERS VMC and is considered "good" for control?',
    choices: [
      'Aft CG and high power',
      'Forward CG, proper bank, lower power, high DA, drag devices, feathered prop',
      'Zero bank and maximum power',
      'Retracted gear at low altitude',
    ],
    correct: 1,
    explanation: 'All listed VMC table factors that lower VMC improve control margin at low airspeed.',
  },
  {
    question: 'Over-banking beyond 5° during single-engine flight:',
    choices: [
      'Always increases performance',
      'Decreases performance by reducing vertical lift needed to offset weight',
      'Has no effect',
      'Lowers VMC further with no downside',
    ],
    correct: 1,
    explanation: 'Over-banking reduces the vertical lift component needed to support weight, decreasing performance.',
  },
  {
    question: 'Lighter weight effect on rate of climb:',
    choices: [
      'Worse climb performance',
      'Better rate of climb, but can result in increased VMC',
      'No effect on either',
      'Only affects landing distance',
    ],
    correct: 1,
    explanation: 'Lighter weight improves climb performance but can increase VMC.',
  },
];

const oralQuestions = [
  {
    question: 'Baron 58 engines are:',
    choices: [
      '2 Lycoming IO-540, carbureted',
      '2 Continental IO-550-C, fuel injected, air cooled',
      '2 Pratt & Whitney turboprops',
      '1 Continental and 1 Lycoming',
    ],
    correct: 1,
    explanation: 'IO = fuel injection, O = horizontally opposed. Two Continental IO-550-C engines.',
  },
  {
    question: 'Horsepower per engine on the Baron 58:',
    choices: ['200 HP', '250 HP', '300 HP', '350 HP'],
    correct: 2,
    explanation: 'Each engine produces 300 HP.',
  },
  {
    question: 'Maximum rated RPM:',
    choices: ['2400', '2500', '2700', '2900'],
    correct: 2,
    explanation: 'Max rated RPM is 2700.',
  },
  {
    question: 'Maximum starter time:',
    choices: ['15 seconds', '20 seconds', '30 seconds', '60 seconds'],
    correct: 2,
    explanation: 'Maximum starter time is 30 seconds.',
  },
  {
    question: 'Total usable fuel capacity:',
    choices: ['150 gal', '166 gal', '172 gal', '180 gal'],
    correct: 1,
    explanation: 'Total fuel is 172 gal; total usable is 166 gal (83 usable per side in mains).',
  },
  {
    question: 'Approved fuel types:',
    choices: ['Jet-A only', '100LL (blue) or 100 (green)', 'Mogas only', '100LL only'],
    correct: 1,
    explanation: 'Approved fuels are 100LL (blue) or 100 (green).',
  },
  {
    question: 'Oil capacity (full / minimum / normal):',
    choices: [
      '8 qts full, 6 min, 7 normal',
      '12 qts full, 9 minimum, 10-11 normal',
      '10 qts full, 8 min, 9 normal',
      '14 qts full, 10 min, 12 normal',
    ],
    correct: 1,
    explanation: '12 quarts full; 9 minimum; 10-11 normal.',
  },
  {
    question: 'Maximum gross weight:',
    choices: ['5000 lbs', '5200 lbs', '5500 lbs', '6000 lbs'],
    correct: 2,
    explanation: 'Max gross weight is 5500 lbs.',
  },
  {
    question: 'VMC (minimum control speed, red line):',
    choices: ['78 kts', '84 kts', '88 kts', '95 kts'],
    correct: 1,
    explanation: 'VMC is 84 kts — minimum control speed with one engine inoperative.',
  },
  {
    question: 'Vso (dirty stall speed):',
    choices: ['65 kts', '78 kts', '84 kts', '92 kts'],
    correct: 0,
    explanation: 'Vso is 65 kts with flaps and gear extended.',
  },
  {
    question: 'Vs1 (clean stall speed):',
    choices: ['65 kts', '78 kts', '84 kts', '101 kts'],
    correct: 1,
    explanation: 'Vs1 is 78 kts clean configuration.',
  },
  {
    question: 'Vyse (best rate of climb, single engine — blue line):',
    choices: ['95 kts', '101 kts', '105 kts', '115 kts'],
    correct: 1,
    explanation: 'Vyse is 101 kts — best rate of climb single engine (blue line).',
  },
  {
    question: 'Vy (best rate of climb, both engines):',
    choices: ['101 kts', '105 kts', '115 kts', '122 kts'],
    correct: 1,
    explanation: 'Vy is 105 kts for best rate of climb with both engines.',
  },
  {
    question: 'Vxse (best angle of climb, single engine):',
    choices: ['92 kts', '95 kts', '101 kts', '105 kts'],
    correct: 1,
    explanation: 'Vxse is 95 kts — best angle of climb single engine.',
  },
  {
    question: 'Vfe (max flap extended):',
    choices: ['101 kts', '115 kts', '122 kts', '152 kts'],
    correct: 2,
    explanation: 'Vfe is 122 kts; flap range is 69-122 (white arc).',
  },
  {
    question: 'Vle (max gear extended):',
    choices: ['122 kts', '135 kts', '152 kts', '170 kts'],
    correct: 2,
    explanation: 'Vle is 152 kts maximum gear extended.',
  },
  {
    question: 'Vr (rotation speed):',
    choices: ['78 kts', '85 kts', '92 kts', '101 kts'],
    correct: 1,
    explanation: 'Rotation speed Vr is 85 kts.',
  },
  {
    question: 'Best glide speed:',
    choices: ['101 kts', '105 kts', '115 kts', '135 kts'],
    correct: 2,
    explanation: 'Best glide is 115 kts.',
  },
  {
    question: 'Vsse (minimum intentional one-engine operation, yellow line):',
    choices: ['84 kts', '88 kts', '92 kts', '95 kts'],
    correct: 1,
    explanation: 'Vsse is 88 kts — minimum intentional one-engine operation.',
  },
  {
    question: 'Single-engine service ceiling definition:',
    choices: [
      'Will not climb more than 100 fpm',
      'Will not climb more than 50 fpm',
      'Unlimited altitude',
      'Same as multi-engine ceiling',
    ],
    correct: 1,
    explanation: 'Single-engine service ceiling: will not climb more than 50 fpm.',
  },
  {
    question: 'Multi-engine service ceiling definition:',
    choices: [
      'Will not climb more than 50 fpm',
      'Will not climb more than 100 fpm',
      '15,000 feet MSL',
      'Same as single-engine ceiling',
    ],
    correct: 1,
    explanation: 'Multi-engine service ceiling: will not climb more than 100 fpm.',
  },
  {
    question: 'Propeller system on Baron 58:',
    choices: [
      '2-blade fixed pitch',
      '3-blade constant speed; oil pressure to low pitch, springs/counterweights to high pitch',
      '4-blade turboprop',
      'Electric variable pitch only',
    ],
    correct: 1,
    explanation:
      '3-blade constant speed props. Springs/counterweights move to high pitch; oil pressure moves to low pitch.',
  },
  {
    question: 'Why don\'t props feather when oil pressure is lost on engine shutdown?',
    choices: [
      'Pilot must manually feather every time',
      'Anti-feathering lock pins prevent feathering from loss of oil pressure',
      'Props are fixed pitch',
      'Feathering is automatic on all twins',
    ],
    correct: 1,
    explanation: 'Anti-feathering lock pins prevent the prop from feathering due to oil pressure loss if the engine shuts down.',
  },
  {
    question: 'Electrical system voltage:',
    choices: ['12V single battery', '28V system with two 12V batteries in series (24V to busses)', '24V with one battery', '14V alternator only'],
    correct: 1,
    explanation: '28V system; two 12V batteries in series provide 24V to two electrical busses.',
  },
  {
    question: 'Alternators on the Baron 58:',
    choices: [
      'One 100-amp alternator',
      'Two belt-driven 50-amp alternators, one per engine',
      'Engine-driven generators only',
      'No alternators — battery only',
    ],
    correct: 1,
    explanation: 'Two belt-driven 50-amp alternators, one per engine, with dual voltage regulators.',
  },
  {
    question: 'Vacuum system provides suction via:',
    choices: [
      'One electric pump only',
      'Two engine-driven suction pumps working as a single system',
      'Ram air only',
      'Hydraulic pressure',
    ],
    correct: 1,
    explanation: 'Two engine-driven suction pumps work together; if one fails, the other continues.',
  },
  {
    question: 'Stall warning system location:',
    choices: [
      'Right wing leading edge',
      'Leading edge of left wing — electrically operated vane',
      'Tail cone only',
      'Pitot tube',
    ],
    correct: 1,
    explanation: 'Warning vane on left wing leading edge activates a horn when approaching stall.',
  },
  {
    question: 'Landing gear is operated by:',
    choices: [
      'Manual crank only',
      'Electric motor with 2-position switch on panel',
      'Hydraulic pump only',
      'Pilot muscle power on co-pilot pedals',
    ],
    correct: 1,
    explanation: 'Electric motor driven; 2-position switch on instrument panel. Manual backup crank behind co-pilot seat.',
  },
  {
    question: 'CRITICAL gear safety rule:',
    choices: [
      'Always use manual and electric together',
      'NEVER operate gear electrically with manual hand crank engaged',
      'Crank must stay engaged during flight',
      'Co-pilot operates electric gear only',
    ],
    correct: 1,
    explanation: 'Never operate gear electrically with manual hand crank engaged — it could spin and cause damage or injury.',
  },
  {
    question: 'Gear warning horn sounds in how many instances?',
    choices: ['One', 'Two', 'Three', 'Four'],
    correct: 2,
    explanation: 'Three: ≤12" MP, gear up on ground (squat switch prevents), full flaps with gear not extended.',
  },
  {
    question: 'Cross-feed procedure requires:',
    choices: [
      'Any flight attitude at max power',
      'Level flight only; inop engine off, aux pump LOW on good engine, good engine to cross-feed',
      'Both selectors to cross-feed simultaneously',
      'High pump always on',
    ],
    correct: 1,
    explanation: 'Level flight only. Inoperative engine off, aux pump on LOW on operative engine, good engine to cross-feed.',
  },
  {
    question: 'Loss of engine — immediate memory items include:',
    choices: [
      'Gear down, flaps full, idle power',
      'Bank, ball, blue line — mixture/props/throttles full, identify, verify, feather',
      'Shutdown both engines',
      'Turn toward dead engine immediately',
    ],
    correct: 1,
    explanation: 'Bank, ball, blue line. Mixture/props/throttles full. Check flaps/gear up. Dead foot — dead engine. Identify, verify, feather.',
  },
  {
    question: 'Define VMC for the oral:',
    choices: [
      'Maximum cruise speed',
      'Minimum speed at which directional control can be maintained with critical engine inoperative (84 kts published)',
      'Stall speed clean',
      'Best glide speed',
    ],
    correct: 1,
    explanation: 'VMC is minimum speed for directional control with critical engine inop — published 84 kts red line.',
  },
  {
    question: 'Manifold pressure in a climb:',
    choices: [
      'Increases 1" per 1000 ft',
      'Decreases approximately 1" per 1000 ft',
      'Stays constant',
      'Doubles every 5000 ft',
    ],
    correct: 1,
    explanation: 'Manifold pressure decreases ~1 inch per 1000 feet during climb as air density decreases.',
  },
  {
    question: 'On approach at blue line but not maintaining glide slope, you should:',
    choices: [
      'Reduce power and descend below blue line',
      'Add power to fly level at blue line, recapture glide slope, then descend adjusting power',
      'Extend flaps immediately',
      'Turn off one engine',
    ],
    correct: 1,
    explanation: 'Add power to maintain blue line level, recapture glide slope, then descend on slope adjusting power as needed.',
  },
  {
    question: 'Navigation system on this Baron:',
    choices: ['Garmin G1000 only', 'Garmin GTN 650Xi', 'Bendix/King only', 'No GPS installed'],
    correct: 1,
    explanation: 'Garmin GTN 650Xi navigation system.',
  },
  {
    question: 'Autopilot type:',
    choices: ['Garmin GFC 500', 'STEC', 'Honeywell', 'None installed'],
    correct: 1,
    explanation: 'STEC autopilot.',
  },
  {
    question: 'Vx (best angle of climb, both engines):',
    choices: ['88 kts', '92 kts', '95 kts', '101 kts'],
    correct: 1,
    explanation: 'Vx is 92 kts — best angle of climb with both engines; also referenced for minimal intentional one-engine operation context.',
  },
  {
    question: 'Emergency descent speed (practice speed):',
    choices: ['115 kts / practice 101', '152 kts / practice 135 kts', '122 kts / practice 110', '135 kts / practice 115'],
    correct: 1,
    explanation: 'Emergency descent is 152 kts; practice at 135 kts per oral review materials.',
  },
  {
    question: 'What does "IO" mean in IO-550-C?',
    choices: ['Inline overhead', 'Fuel Injected, horizontally Opposed', 'Integrated oil-cooled', 'Ignition only'],
    correct: 1,
    explanation: 'I = fuel Injection, O = horizontally Opposed engine configuration.',
  },
  {
    question: 'After engine start, what provides spark to the engines?',
    choices: ['Alternators only', 'Magnetos', 'Fuel injectors', 'Vacuum pumps'],
    correct: 1,
    explanation: 'Once started, magnetos provide spark. Batteries/alternators power electrical systems.',
  },
  {
    question: 'First step of backup landing gear extension:',
    choices: ['Turn hand crank 50 times', 'Pull LDG OR MOTOR circuit breaker', 'Gear handle UP', 'Pull LDG OR RELAY breaker'],
    correct: 1,
    explanation: 'Step 1: LDG OR MOTOR circuit breaker — PULL. Then gear handle DOWN, then manual crank.',
  },
  {
    question: 'Brake system on the Baron 58:',
    choices: [
      'Pneumatic, co-pilot and pilot',
      'Hydraulic on main struts, pilot pedals only',
      'Electric only',
      'Single shared pedal both sides',
    ],
    correct: 1,
    explanation: 'Hydraulic brakes on main struts. Reservoir in nose with dipstick. Independent systems — pilot pedals only, no co-pilot brakes.',
  },
  {
    question: 'Emergency static port location:',
    choices: [
      'Right windshield',
      'Pilot lower left side — red placard, see placard for operation',
      'Tail cone',
      'Co-pilot floor only',
    ],
    correct: 1,
    explanation: 'Emergency static port placard at pilot position, lower left side (red placard).',
  },
  {
    question: 'Flap system on Baron 58:',
    choices: [
      'Manual lever only',
      'Electric 3-position switch: up/approach/down; red=up, green=down',
      'Hydraulic single lever',
      'Automatic only',
    ],
    correct: 1,
    explanation: 'Electrically controlled and actuated. Three-position switch with red=up, green=down above flap switch.',
  },
  {
    question: 'Pitot-static system consists of:',
    choices: [
      'One pitot tube only',
      '2 pitot tubes (left & right nose) and 2 static ports on empennage; pitot heat on panel',
      'Static ports in cabin only',
      'GPS-derived only',
    ],
    correct: 1,
    explanation: 'Two pitot tubes, two static ports on empennage, pitot heat switch on panel feeds instrumentation.',
  },
  {
    question: 'Anti-ice system on this aircraft:',
    choices: ['Full wing deice boots', 'Pitot heat', 'Engine inlet heat only', 'None'],
    correct: 1,
    explanation: 'Anti-ice: pitot heat per oral review.',
  },
  {
    question: 'Heater type on Baron 58:',
    choices: ['Electric only', 'Janitrol combustion heater', 'Engine bleed air only', 'Diesel furnace'],
    correct: 1,
    explanation: 'Janitrol combustion heater — be able to describe basic operation for oral.',
  },
  {
    question: 'Accelerate-stop distance is:',
    choices: [
      'Distance to climb to 50\' after engine failure',
      'Distance to accelerate to Vr, throttles idle, and full stop',
      'Distance to feather and climb to Vyse',
      'Braking distance from touchdown only',
    ],
    correct: 1,
    explanation: 'Accelerate-stop: accelerate to Vr, bring throttles to idle, come to full stop — see POH performance chart.',
  },
  {
    question: 'Accelerate-go distance is:',
    choices: [
      'Distance to abort after Vr',
      'Distance to accelerate to Vr, engine fail, feather, continue takeoff to 50\' AGL',
      'Distance to climb to service ceiling',
      'Distance for single-engine landing only',
    ],
    correct: 1,
    explanation: 'Accelerate-go: accelerate to Vr, engine fails, feather prop, continue takeoff to 50 feet AGL — POH chart.',
  },
  {
    question: 'Gear position lights indicate:',
    choices: ['Green=up, Red=down', 'Red=up, Green=down', 'Both green when in transit', 'No lights installed'],
    correct: 1,
    explanation: 'Gear switch has green/red light: Red = gear UP, Green = gear DOWN.',
  },
  {
    question: 'Electrical fuel pump HIGH is used for:',
    choices: [
      'Cruise only',
      'Starting (4 sec when cold) or mechanical pump failure',
      'Never — LOW only',
      'Feathering only',
    ],
    correct: 1,
    explanation: 'HIGH: starting (about 4 seconds when cold) or if mechanical fuel pump fails. LOW for pressure fluctuations and restart after engine failure.',
  },
  {
    question: 'Vacuum pump failure is indicated by:',
    choices: [
      'Master caution only',
      'Pop-out red button on suction gauge for that side',
      'Gear horn',
      'Stall warning horn',
    ],
    correct: 1,
    explanation: 'Suction gauge has two pop-out red source identifier buttons — popped out = that side\'s pump failed.',
  },
  {
    question: 'Communications radio on this Baron:',
    choices: ['Com 2 standalone', 'Com 1 = Garmin GTN 650Xi', 'No COM installed', 'HF only'],
    correct: 1,
    explanation: 'Com 1 is integrated with the Garmin GTN 650Xi.',
  },
  {
    question: 'Which engine is the critical engine (oral definition)?',
    choices: [
      'Always the right engine',
      'The engine that when inoperative has the greater adverse effect on control and performance',
      'The engine with lower hours',
      'Neither on all twins',
    ],
    correct: 1,
    explanation: 'Critical engine = engine whose failure most adversely affects control and performance. Left engine on this Baron (conventional clockwise props).',
  },
  {
    question: 'Define critical engine factors for the oral (PAST effects):',
    choices: [
      'Power, altitude, speed, thrust',
      'P-factor (yaw), accelerated slipstream (roll & pitch), spiraling slipstream (yaw), torque (roll)',
      'Pitch, airspeed, stall, thrust',
      'All affect yaw only',
    ],
    correct: 1,
    explanation: 'P-factor=yaw, accelerated slipstream=roll&pitch, spiraling slipstream=yaw, torque=roll. Know each thoroughly.',
  },
];

const aerodynamicsFlashcards = [
  {
    front: 'Critical Engine',
    back: 'The engine whose failure would most adversely affect the performance or handling qualities of the aircraft.\n\nIn conventional twins with clockwise-rotating props (as viewed from the cockpit), the LEFT engine is critical because all four PAST factors combine to make its failure the worst-case scenario for control and performance.',
  },
  {
    front: 'P — P-Factor',
    back: 'The descending propeller blade produces more thrust than the ascending blade (higher angle of attack on the descending blade).\n\nIf the LEFT engine fails, P-factor from the RIGHT engine is farther from the longitudinal axis, creating a greater yawing moment toward the dead engine.\n\nPrimary effect: YAW. You must explain that asymmetric thrust creates the yawing force that rudder must counteract.',
  },
  {
    front: 'A — Accelerated Slipstream',
    back: 'Air being forced over the wing by the operating engine creates extra lift.\n\nWhen the left engine fails, airflow from the RIGHT engine creates more induced airflow over the wing and a longer moment arm, producing a greater rolling moment toward the live engine.\n\nPrimary effects: ROLL and PITCH. Be able to explain how the operating engine\'s slipstream affects lift distribution.',
  },
  {
    front: 'S — Spiraling Slipstream',
    back: 'The propeller creates a corkscrew (spiraling) stream of air behind it as it rotates through the air.\n\nLEFT engine operating: spiraling air hits the rudder, making it MORE effective.\nLEFT engine failed: RIGHT engine slipstream spirals AWAY from the rudder, making it LESS effective when needed most.\n\nFlow direction: High pressure → Low pressure (left to right). Descending blade = low pressure; ascending blade = high pressure.\n\nPrimary effect: YAW (rudder effectiveness).',
  },
  {
    front: 'T — Torque',
    back: 'Newton\'s third law: the clockwise rotation of the propeller creates an opposite (counter-clockwise) rolling reaction on the aircraft.\n\nTorque tries to roll the airplane opposite the propeller\'s direction of rotation.\n\nIf the left engine fails, torque from the right engine tries to roll the aircraft to the LEFT.\n\nPrimary effect: ROLL.',
  },
  {
    front: 'Left Engine Critical?',
    back: 'YES — in conventional multi-engine airplanes with both engines rotating clockwise.\n\nAll four PAST factors make the left engine critical:\n• P-Factor: right engine thrust farther from centerline\n• Accelerated slipstream: right engine creates longer rolling arm\n• Spiraling slipstream: left engine normally helps rudder; right engine misses rudder when left fails\n• Torque: rolls left when left engine fails',
  },
  {
    front: 'Counter-Rotating Props',
    back: 'Aircraft with counter-rotating propellers do NOT have a critical engine.\n\nLoss of either engine has the same aerodynamic effect because PAST factors are balanced — neither engine failure is worse than the other for control and performance.',
  },
  {
    front: 'P-Factor + Left Engine Failed',
    back: 'When the LEFT engine fails, the operating RIGHT engine\'s P-factor acts farther from the longitudinal axis of the aircraft.\n\nThis creates a GREATER yawing moment than if the right engine had failed (where left engine P-factor would be closer to centerline).\n\nThis is a key reason the left engine is the critical engine — explain the moment arm concept to your examiner.',
  },
  {
    front: 'Spiraling Slipstream Direction',
    back: 'Spiraling slipstream flows from HIGH pressure to LOW pressure (left to right in standard diagrams).\n\nDescending propeller blade: high angle of attack → LOW pressure airflow.\nAscending propeller blade: low angle of attack → HIGH pressure airflow.\n\nHigh pressure pushes the spiraling slipstream to the right, which is why the left engine\'s slipstream can hit the rudder but the right engine\'s slipstream misses it when the left engine is dead.',
  },
  {
    front: 'Torque + Left Engine Failed',
    back: 'With the left engine failed and the right engine at full power, torque from the clockwise-rotating right prop tries to roll the aircraft to the LEFT (opposite the prop rotation direction).\n\nThis combines with P-factor yaw and accelerated slipstream roll — all reasons you need proper technique (bank, ball, rudder) after engine failure.',
  },
];

const vmcFlashcards = [
  {
    front: 'VMC Definition',
    back: 'VMC = Ratio of available engine power vs available rudder power.\n\nVMC is the minimum speed at which directional control can be maintained with the critical engine inoperative (Baron 58: 84 kts, red line).\n\nBelow VMC, rudder authority is insufficient to counteract asymmetric thrust from the operating engine. The manufacturer determines VMC under FAA-mandated conditions.',
  },
  {
    front: 'Forward CG → VMC',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Decreases\n\nControl: More forward CG creates a longer arm between CG and rudder = more leverage = rudder more effective = less rudder needed to counter asymmetric turning.\n\nPerformance: Forward CG requires more downward tail force to stay level, adding to overall downward force and decreasing lift/rate of climb.',
  },
  {
    front: 'Bank 3-5° → VMC',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Increases\n\nControl: Banking toward the operating engine turns the AC in the same direction as required rudder input, so less rudder is needed.\n\nPerformance: 3-5° bank reduces sideslip and drag. No bank = more drag. Over-bank >5° = loses vertical lift component needed to support weight.',
  },
  {
    front: 'Increased Weight (banking)',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Decreases\n\nControl: More weight in a turn requires more lift. Increased vertical lift (VL) also increases horizontal lift (HL) working with rudder — less rudder input needed.\n\nPerformance: Lighter weight = better climb, but lighter weight can INCREASE VMC (trade-off).',
  },
  {
    front: 'Lower Power → VMC',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Decreases\n\nControl: Lower power = less asymmetric turning tendency = less rudder required.\n\nPerformance: Lower power directly decreases rate of climb. During training/demo of VMC, power is reduced — but in a real engine failure you\'re at full power on the good engine.',
  },
  {
    front: 'High Density Altitude',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Decreases\n\nControl: Less dense air = less airflow over wing/prop = less turning tendency, but rudder remains substantially effective. Higher DA also decreases adverse yaw.\n\nPerformance: Less dense air = less engine power effect = worse climb. More dense air acts like more power (needs more rudder).',
  },
  {
    front: 'Drag Devices Extended',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Decreases\n\nControl: Gear and flaps interrupt the rearward-flowing prop slipstream, reducing asymmetric turning tendency.\n\nPerformance: Additional drag from gear/flaps decreases rate of climb.',
  },
  {
    front: 'Feathered Prop',
    back: 'VMC: Lowers (Good) | Control: Increases | Performance: Increases\n\nControl: Feathered prop reduces yaw toward the dead engine — the primary reason you identify, verify, and feather.\n\nPerformance: Feathered prop dramatically decreases drag, improving climb performance on the good engine.',
  },
  {
    front: 'Over-Bank > 5°',
    back: 'Hurts PERFORMANCE during single-engine flight.\n\nOver-banking beyond 5° causes loss of the vertical lift component (VLC) needed to offset weight, decreasing climb performance.\n\nProper technique: 3-5° bank toward the operating engine — not wings level, not excessive bank.',
  },
  {
    front: 'No Bank (Wings Level)',
    back: 'Causes more sideslip and drag — worse PERFORMANCE.\n\nWithout banking toward the operating engine, the aircraft flies with more sideslip, requiring more rudder and creating more drag.\n\nCorrect single-engine technique: bank 3-5° toward the good engine, ball centered, hold blue line (Vyse).',
  },
];

const oralFlashcards = [
  {
    front: 'Engines',
    back: '2 Continental IO-550-C engines, fuel injected, air cooled.\nIO = "I" fuel injection, "O" horizontally opposed.\n300 HP per engine. Max rated RPM: 2700. Max starter time: 30 seconds.',
  },
  {
    front: 'Fuel System',
    back: 'Type: 100LL (blue) or 100 (green).\nTotal: 172 gal | Usable: 166 gal (83 per side in mains).\nControls between seats: ON/OFF/Cross-feed.\nMechanical pump per engine; electrical aux pump HI/LOW/OFF.\nHI: starting or mech pump failure. LOW: pressure fluctuations/restart.',
  },
  {
    front: 'Oil & Weight',
    back: 'Oil: 12 qts full, 9 minimum, 10-11 normal.\nMax gross weight: 5500 lbs.\nEmpty weight: per POH — complete W&B for your aircraft.',
  },
  {
    front: 'Airspeeds — Stall & Control',
    back: 'Vso: 65 kts — dirty stall (flaps/gear)\nVs1: 78 kts — clean stall\nVMC: 84 kts — min control speed, one engine out (RED LINE)\nVsse: 88 kts — min intentional one-engine ops (YELLOW LINE)',
  },
  {
    front: 'Airspeeds — Climb & Glide',
    back: 'Vr: 85 kts — rotation\nVx: 92 kts — best angle climb (both engines)\nVxse: 95 kts — best angle climb (single engine)\nVyse: 101 kts — best rate climb SE (BLUE LINE)\nVy: 105 kts — best rate climb both engines\nBest glide: 115 kts',
  },
  {
    front: 'Airspeeds — Limits',
    back: 'Vfe: 122 kts — max flap extended (white arc 69-122)\nVle: 152 kts — max gear extended\nEmergency descent: 152 kts (practice at 135 kts)',
  },
  {
    front: 'Service Ceilings & Takeoff Performance',
    back: 'Single-engine service ceiling: will not climb > 50 fpm.\nMulti-engine service ceiling: will not climb > 100 fpm.\nAccelerate-stop: accel to Vr, idle, full stop (POH chart).\nAccelerate-go: accel to Vr, engine fail, feather, continue to 50\' AGL (POH chart).',
  },
  {
    front: 'Propeller System',
    back: '3-blade constant speed prop.\nSprings/counterweights → high pitch (less RPM, less drag).\nOil pressure → low pitch (more RPM, more thrust).\nAft levers in flight = feathered (less drag). Full forward on takeoff = max thrust.\nAnti-feathering lock pins prevent feathering from oil pressure loss on shutdown.',
  },
  {
    front: 'Electrical System',
    back: '28V system. Two 12V batteries in series → 24V to two busses.\nTwo belt-driven 50-amp alternators (one per engine).\nDual voltage regulators — one active, one backup.\nPowers: starters, lights, radios, avionics, heater, cowl flaps, gear.\nMagnetos provide spark once engines are running.',
  },
  {
    front: 'Vacuum & Stall Warning',
    back: 'Vacuum: 2 engine-driven suction pumps as one system. Either can fail; other continues. Pop-out red buttons on gauge identify failed side.\n\nStall warning: vane on LEFT wing leading edge, electric horn. Effective all attitudes/weights/speeds. Affected by icing.',
  },
  {
    front: 'Landing Gear',
    back: 'Electric motor, 2-position switch. Red=up, Green=down.\nMirror on left cowling (nose gear visual). Floor indicator under panel.\nManual crank behind co-pilot seat.\n\n⚠️ NEVER use electric gear with manual crank engaged.\n\nGear horn: ≤12" MP, gear up on ground, full flaps gear not down.',
  },
  {
    front: 'Backup Gear Extension',
    back: '1. LDG OR MOTOR circuit breaker — PULL\n2. Landing gear handle — DOWN\n3. Hand crank behind co-pilot seat, counterclockwise ~50 turns\n4. Check position lights/horn; verify LDG OR RELAY breaker engaged',
  },
  {
    front: 'Cross-Feed Procedure',
    back: 'Level flight ONLY.\n1. Inoperative engine selector → OFF\n2. Aux fuel pump on good engine → LOW\n3. Good engine selector → Cross-feed\n4. Fuel pump OFF or LOW as required\nLockout prevents both selectors in cross-feed or OFF at same time.',
  },
  {
    front: 'Engine Failure — Memory Items',
    back: 'Bank, ball, blue line.\nMixture/props/throttles — FULL FORWARD.\nFlaps/gear — UP.\nDead foot = dead engine.\nIdentify → Verify → Feather.\nMixture to lean on dead engine.\nSee emergency checklist for restart.',
  },
  {
    front: 'VMC (Oral Definition)',
    back: 'Minimum speed at which directional control can be maintained with critical engine inoperative (84 kts published, red line).\n\nBelow VMC, rudder authority cannot counteract asymmetric thrust.\nManufacturer determines VMC under FAA-mandated conditions.\nBe able to explain all VMC factors from the table.',
  },
  {
    front: 'Manifold Pressure',
    back: 'Vacuum created by the engine on the intake stroke — a measure of power being produced.\n\nIn a climb: decreases approximately 1 inch per 1000 feet because air density decreases and the engine cannot produce as much vacuum (power) at altitude.',
  },
  {
    front: 'Flaps, Brakes, Pitot-Static',
    back: 'Flaps: electric 3-position (up/approach/down). Red=up, green=down.\nBrakes: hydraulic on main struts, reservoir in nose. Pilot pedals only.\nPitot-static: 2 pitot tubes (nose), 2 static ports (empennage). Pitot heat on panel.',
  },
  {
    front: 'Avionics',
    back: 'Navigation: Garmin GTN 650Xi\nAutopilot: STEC\nCommunications: Com 1 = GTN 650Xi\nEmergency static port: red placard, pilot lower left',
  },
];

const pastRecallQuestions = [
  {
    prompt: 'What does the "P" in PAST stand for?',
    answer: 'P-Factor',
    explanation: 'P = P-Factor. The descending blade produces more thrust than the ascending blade. If the left engine fails, P-factor from the right engine is farther from the longitudinal axis, creating greater yaw. Primary effect: YAW toward the dead engine.',
  },
  {
    prompt: 'What does the "A" in PAST stand for?',
    answer: 'Accelerated Slipstream',
    explanation: 'A = Accelerated Slipstream — extra airflow over the wing from the operating engine.',
  },
  {
    prompt: 'What does the "S" in PAST stand for?',
    answer: 'Spiraling Slipstream',
    explanation: 'S = Spiraling Slipstream — corkscrew airflow behind the prop that affects the rudder.',
  },
  {
    prompt: 'What does the "T" in PAST stand for?',
    answer: 'Torque',
    explanation: 'T = Torque — roll tendency opposite to the direction of propeller rotation.',
  },
  {
    prompt: 'The descending propeller blade produces more thrust than the ascending blade. This is called:',
    answer: 'P-Factor',
    explanation: 'P-Factor creates asymmetric thrust and yaw, especially when the operating engine is farther from centerline.',
  },
  {
    prompt: 'Airflow from the operating engine forced over the wing creates extra lift and rolling moment. This is:',
    answer: 'Accelerated Slipstream',
    explanation: 'The right engine\'s accelerated slipstream creates a longer arm and more rolling moment when the left engine fails.',
  },
  {
    prompt: 'Spiraling air from the left propeller hits the rudder and makes it more effective. This factor is:',
    answer: 'Spiraling Slipstream',
    explanation: 'When the left engine is operating, its spiraling slipstream increases rudder effectiveness.',
  },
  {
    prompt: 'The opposite reaction to clockwise prop rotation that tries to roll the aircraft is:',
    answer: 'Torque',
    explanation: 'Torque rolls the aircraft opposite prop rotation. With left engine failed, torque rolls left.',
  },
  {
    prompt: 'If the LEFT engine fails, P-factor from the RIGHT engine creates:',
    answer: 'Greater yaw (farther from longitudinal axis)',
    explanation: 'Operating engine thrust acts farther from centerline, increasing the yawing moment.',
  },
  {
    prompt: 'If the left engine fails, spiraling slipstream from the right engine:',
    answer: 'Spirals away from the rudder',
    explanation: 'Right engine slipstream misses the rudder, reducing rudder effectiveness.',
  },
  {
    prompt: 'P-Factor primarily affects aircraft:',
    answer: 'Yaw',
    explanation: 'Asymmetric thrust yaws the aircraft toward the failed engine side.',
  },
  {
    prompt: 'Accelerated slipstream primarily affects aircraft:',
    answer: 'Roll and pitch',
    explanation: 'Extra lift from operating engine airflow creates rolling and pitching moments.',
  },
  {
    prompt: 'Torque primarily affects aircraft:',
    answer: 'Roll',
    explanation: 'Torque is a rolling moment opposite propeller rotation direction.',
  },
  {
    prompt: 'Spiraling slipstream flows from high pressure to low pressure, which means:',
    answer: 'Left to right (in standard diagrams)',
    explanation: 'Descending blade = low pressure; ascending blade = high pressure, pushing slipstream right.',
  },
  {
    prompt: 'Which PAST factor makes the rudder MORE effective when the left engine is running?',
    answer: 'Spiraling Slipstream',
    explanation: 'Left engine spiraling air hits the rudder directly, increasing its effectiveness.',
  },
  {
    prompt: 'Aircraft with counter-rotating props:',
    answer: 'Have no critical engine',
    explanation: 'Either engine failure has the same aerodynamic effect — no critical engine.',
  },
];

const vmcRecallQuestions = [
  {
    prompt: 'Forward CG effect on VMC:',
    answer: 'Lowers VMC, increases control',
    explanation: 'Forward CG lowers VMC (good for control). More forward CG creates a longer arm between CG and rudder, giving the rudder more leverage — less rudder needed to counter asymmetric turning. However, forward CG requires more tail-down force, decreasing lift and climb performance.',
  },
  {
    prompt: 'Forward CG effect on climb performance:',
    answer: 'Decreases performance',
    explanation: 'More tail-down force required, reducing overall lift.',
  },
  {
    prompt: 'Banking 3–5° toward the operating engine:',
    answer: 'Lowers VMC, less rudder needed',
    explanation: 'Bank turns aircraft same direction as rudder input, reducing required rudder.',
  },
  {
    prompt: 'Proper 3–5° bank effect on performance:',
    answer: 'Increases performance (less sideslip/drag)',
    explanation: 'Reduces sideslip. No bank = more drag. Over-bank >5° = worse performance.',
  },
  {
    prompt: 'Increased weight while banking effect on VMC:',
    answer: 'Lowers VMC',
    explanation: 'More vertical lift component works with rudder, requiring less rudder input.',
  },
  {
    prompt: 'Lower power setting effect on VMC:',
    answer: 'Lowers VMC',
    explanation: 'Less asymmetric turning tendency means less rudder required.',
  },
  {
    prompt: 'Lower power setting effect on climb:',
    answer: 'Decreases climb performance',
    explanation: 'Less power = worse rate of climb.',
  },
  {
    prompt: 'Higher density altitude effect on VMC:',
    answer: 'Lowers VMC, increases control',
    explanation: 'Less air over wing/prop reduces turning tendency; rudder stays effective.',
  },
  {
    prompt: 'Higher density altitude effect on performance:',
    answer: 'Decreases performance',
    explanation: 'Less dense air = less engine power effect, worse climb.',
  },
  {
    prompt: 'Extended gear and flaps effect on VMC:',
    answer: 'Lowers VMC',
    explanation: 'Interrupt prop slipstream, reducing asymmetric turning tendency.',
  },
  {
    prompt: 'Extended gear and flaps effect on climb:',
    answer: 'Decreases climb performance',
    explanation: 'Additional drag reduces rate of climb.',
  },
  {
    prompt: 'Feathered prop effect on VMC:',
    answer: 'Lowers VMC',
    explanation: 'Reduces yaw toward the dead engine.',
  },
  {
    prompt: 'Feathered prop effect on performance:',
    answer: 'Increases performance (less drag)',
    explanation: 'Less drag from dead engine improves climb capability.',
  },
  {
    prompt: 'Over-banking beyond 5° during single-engine flight:',
    answer: 'Decreases performance',
    explanation: 'Loses vertical lift component needed to support weight.',
  },
  {
    prompt: 'VMC is defined as:',
    answer: 'Ratio of available engine power vs rudder power',
    explanation: 'Minimum speed where you can maintain directional control with critical engine inop.',
  },
];

const airspeedRecallQuestions = [
  { prompt: 'Vso — dirty stall speed (flaps/gear extended):', answer: '65 kts', explanation: 'Stall speed in landing configuration.' },
  { prompt: 'Vs1 — clean stall speed:', answer: '78 kts', explanation: 'Stall speed flaps and gear retracted.' },
  { prompt: 'VMC — minimum control speed (red line):', answer: '84 kts', explanation: 'Minimum speed for directional control with one engine inop.' },
  { prompt: 'Vr — rotation speed:', answer: '85 kts', explanation: 'Speed to begin rotation on takeoff.' },
  { prompt: 'Vsse — minimum intentional one-engine operation (yellow line):', answer: '88 kts', explanation: 'Do not intentionally fly below this on one engine.' },
  { prompt: 'Vx — best angle of climb (both engines):', answer: '92 kts', explanation: 'Best angle of climb, minimal intentional 1-engine ops reference.' },
  { prompt: 'Vxse — best angle of climb (single engine):', answer: '95 kts', explanation: 'Best angle of climb with one engine operating.' },
  { prompt: 'Vyse — best rate of climb single engine (blue line):', answer: '101 kts', explanation: 'Fly this speed after engine failure for best climb rate.' },
  { prompt: 'Vy — best rate of climb (both engines):', answer: '105 kts', explanation: 'Best rate of climb with both engines.' },
  { prompt: 'Best glide speed:', answer: '115 kts', explanation: 'Maximum glide distance speed.' },
  { prompt: 'Vfe — max flap extended speed:', answer: '122 kts', explanation: 'White arc top; flap range 69–122 kts.' },
  { prompt: 'Vle — max gear extended speed:', answer: '152 kts', explanation: 'Do not exceed with gear down.' },
];

export const sectionContent = {
  aerodynamics: {
    questions: aerodynamicsQuestions,
    flashcards: aerodynamicsFlashcards,
    memoryPairs: aerodynamicsFlashcards.slice(0, 8),
    recallGame: {
      title: 'PAST Recall Challenge',
      questions: pastRecallQuestions,
    },
  },
  vmc: {
    questions: vmcQuestions,
    flashcards: vmcFlashcards,
    memoryPairs: vmcFlashcards.slice(0, 8),
    recallGame: {
      title: 'VMC Recall Challenge',
      questions: vmcRecallQuestions,
    },
  },
  oral: {
    questions: oralQuestions,
    flashcards: oralFlashcards,
    memoryPairs: oralFlashcards.slice(0, 10),
    recallGame: {
      title: 'Airspeed Recall Challenge',
      questions: airspeedRecallQuestions,
    },
  },
};
