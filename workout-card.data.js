window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS (3-4 days)",
      "date": "2026-08-08",
      "prevDate": "2026-08-04",
      "nextAvailable": {
        "earliest": "2026-08-11",
        "latest": "2026-08-12",
        "fatigue_state": "elevated",
        "driver": "delts recovery (heavy stimulus, elevated fatigue, ~82h)"
      },
      "stats": [
        "59m",
        "15 sets",
        "12.0k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS (3-4 days) \u2014 2 load\u2191 \u00b7 3 rep\u2191 \u00b7 0 hold.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/6</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 25 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/13/14) \u2014 earn the jump; top set 25\u219227.5; +10.0% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 25 for 11-13, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 25,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 20,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Band Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "band_resisted_isolation",
          "qc": "fail",
          "action": "progress_reps_tempo",
          "assess": "Last top set: 65 lb \u00d7 16 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2717 QC fail: set_role_conflict(warmup_labeled_set_at_working_effort(set 1 @ RPE 8))</b> \u00b7 Already on the top band (65 lb). No heavier band in inventory \u2014 progress reps \u2192 tempo \u2192 pauses \u2192 ROM \u2192 volume before any new band. Back-off holds its own last load (55) for 20 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": 65.0,
                "reps": "16\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 20,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "20",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 94.37333333333333,
              "decisionScoreRaw": 94.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 91.70666666666668,
              "decisionScoreRaw": 91.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 88.42888888888888,
              "decisionScoreRaw": 88.42888888888888,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 87.37333333333333,
              "decisionScoreRaw": 87.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 88.04,
              "decisionScoreRaw": 88.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 22.5 lb \u00d7 9 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 22.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (20) for 12-14 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 12.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "9\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 20,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 17.5,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 26.394166666666667,
              "decisionScoreRaw": 26.394166666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 25.29,
              "decisionScoreRaw": 25.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 25.081666666666663,
              "decisionScoreRaw": 25.081666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 24.1025,
              "decisionScoreRaw": 24.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 22.43583333333333,
              "decisionScoreRaw": 22.43583333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Strict form only",
            "No failure",
            "Continuous tension",
            "Pump and stretch focus",
            "Do not create spillover fatigue"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 32.5 lb \u00d7 10 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 32.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (30) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-11, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 18 @ RPE 9 \u00b7 bodyweight \u00b7 anchor 20 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226520 at RPE 9 before adding external load. Back-off holds its own last load (bodyweight) for 16-18 \u2014 it has not reached the 20-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 0,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "18\u201325",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "16\u201318",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Stay upright",
            "Elbows close to body",
            "Full lockout squeeze",
            "Controlled eccentric",
            "No bouncing",
            "Stop before shoulder discomfort"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 275 lb \u00d7 17 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set hit 17 (\u226515) reps \u2014 add bands 275\u2192300 lb and rebuild reps. Back-off holds its own last load (250) for 12-14 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "4",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 275,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": 300.0,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 250,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 250.0,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-10, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        }
      ],
      "sequencingAdvisory": "\"Seated Lateral Raise\" (isolation/accessory) is displayed before \"Hanging Leg Raise\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS  (5 days)",
      "date": "2026-08-07",
      "prevDate": "2026-08-02",
      "nextAvailable": {
        "earliest": "2026-08-10",
        "latest": "2026-08-11",
        "fatigue_state": "elevated",
        "driver": "chest recovery (heavy stimulus, elevated fatigue, ~84h)"
      },
      "stats": [
        "64m",
        "13 sets",
        "12.9k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS  (5 days) \u2014 3 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
        "assess": "7 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/7</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Barbell Incline Bench Press",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 143 lb \u00d7 10 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 143\u00d710 at RPE 9 (\u2265 anchor 10), backoffs productive \u2014 top set 143\u2192148.8; +4.1% load costs ~1 rep, so the rep target drops 10\u21929 [range 5-9]. Back-off holds its own last load (132.3) for 8-10 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 82.7,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 132,
                "reps": 4,
                "rpe": 7
              },
              "prop": {
                "lbs": 148.8,
                "reps": "5\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 143,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 132,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 152.86666666666665,
              "decisionScoreRaw": 152.86666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 152.5,
              "decisionScoreRaw": 152.5,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 146.33999999999997,
              "decisionScoreRaw": 146.33999999999997,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 140.83999999999997,
              "decisionScoreRaw": 140.83999999999997,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 158.66916666666668,
              "decisionScoreRaw": 158.66916666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Fly",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "1:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 40 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/12) \u2014 earn the jump; top set 40\u219242.5; +6.2% load costs ~2 reps, so the rep target drops 12\u219210 [range 8-10]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 37.5 for 10-12, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 25,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 22.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 42.5,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 35,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 37.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 47.54,
              "decisionScoreRaw": 47.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 44.12333333333333,
              "decisionScoreRaw": 44.12333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 47.04,
              "decisionScoreRaw": 47.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 44.81777777777778,
              "decisionScoreRaw": 44.81777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 48.79,
              "decisionScoreRaw": 48.79,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Triceps Extension",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 12 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (50) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 50.0,
                "reps": "6",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 75.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 60,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 80.70666666666668,
              "decisionScoreRaw": 80.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 77.81777777777778,
              "decisionScoreRaw": 77.81777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 80.59555555555556,
              "decisionScoreRaw": 80.59555555555556,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 77.70666666666668,
              "decisionScoreRaw": 77.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 80.59555555555556,
              "decisionScoreRaw": 80.59555555555556,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "1:30",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 12 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (275) for 14-16 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "4",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 250,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 300.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 300,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 275.0,
                "reps": "14\u201316",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 14 @ RPE 9.5 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (15/14/14) \u2014 earn the jump; top set 22.5\u219225; +11.1% load costs ~4 reps, so the rep target drops 14\u219210 [range 8-10]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 22.5 for 12-14, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 6
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 14,
                "rpe": 9.5
              },
              "prop": {
                "lbs": 25,
                "reps": "8\u201310",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "1:30",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No torso swing",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "Every set was labeled warm-up, but at least one was performed at working effort.",
          "rationale": "<b>\u2717 QC fail: set_role_conflict, warmup_labeled_set_at_working_effort(set 1 @ RPE 8)</b> \u00b7 Set-role labeling conflict \u2014 warmup_labeled_set_at_working_effort(set 1 @ RPE 8). Nothing here is typed as a working set, so there is no top set to progress from, but the data says work was done. Re-label the working set(s) and the engine resumes.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day C (delts/abs) also trains delts (the logged Day C session on 2026-08-08). This exercise's own recovery estimate (52h, stretch stimulus, moderate fatigue) extends to 2026-08-10, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Chest Dip",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "2:00",
          "cues": [],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps)</b> \u00b7 Cannot prescribe: last session's reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null
        }
      ],
      "sequencingAdvisory": "\"Dumbbell Fly\" (isolation/accessory) is displayed before \"Chest Dip\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-06",
      "prevDate": "2026-08-01",
      "nextAvailable": {
        "earliest": "2026-08-09",
        "latest": "2026-08-10",
        "fatigue_state": "elevated",
        "driver": "back recovery (heavy stimulus, elevated fatigue, ~86h)"
      },
      "stats": [
        "73m",
        "14 sets",
        "8.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 3 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
        "assess": "8 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/8</b> prescriptions passed the validation gate; <b>3 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Assisted Pull Up",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stall"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 175 assist \u00d7 12 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 175 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (200) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 225.0,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 175,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "12\u201315",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 32.95666666666666,
              "decisionScoreRaw": 32.95666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.37333333333333,
              "decisionScoreRaw": 33.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 32.33166666666666,
              "decisionScoreRaw": 32.33166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 65.04,
              "decisionScoreRaw": 65.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 95.45666666666666,
              "decisionScoreRaw": 95.45666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Barbell Bent Over Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 143 lb \u00d7 8 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 143.3 \u2014 reps below anchor; chase reps to ~10 at RPE 10 before adding load. Back-off holds its own last load (132.3) for 7-9 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 77.2,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 115.7,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 143,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 143.3,
                "reps": "8\u201310",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 150.19,
              "decisionScoreRaw": 150.19,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 146.5233333333333,
              "decisionScoreRaw": 146.5233333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 145.42333333333332,
              "decisionScoreRaw": 145.42333333333332,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 147.80666666666664,
              "decisionScoreRaw": 147.80666666666664,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 163.64666666666668,
              "decisionScoreRaw": 163.64666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 30\u219232.5; +8.3% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (27.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-07). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-09, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell One Arm Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 70 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 70\u00d713 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 70\u219275; +7.1% load costs ~2 reps, so the rep target drops 13\u219211 [range 6-11]. Back-off earned its own jump too \u2014 67.5 for 11-13, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 35,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 40,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 60,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 70,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 75,
                "reps": "6\u201311",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 60,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 67.5,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 74.70666666666666,
              "decisionScoreRaw": 74.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 72.04,
              "decisionScoreRaw": 72.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 69.58166666666666,
              "decisionScoreRaw": 69.58166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 75.31777777777778,
              "decisionScoreRaw": 75.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 84.8525,
              "decisionScoreRaw": 84.8525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Cross Body Hammer Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 27.5 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 27.5\u219230; +9.1% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (27.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 27.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-07). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-09, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 34.428888888888885,
              "decisionScoreRaw": 34.428888888888885,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.98444444444444,
              "decisionScoreRaw": 33.98444444444444,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 34.59555555555555,
              "decisionScoreRaw": 34.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 39.54,
              "decisionScoreRaw": 39.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 41.54,
              "decisionScoreRaw": 41.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "Every set was labeled warm-up, but at least one was performed at working effort.",
          "rationale": "<b>\u2717 QC fail: set_role_conflict, warmup_labeled_set_at_working_effort(set 2 @ RPE 9)</b> \u00b7 Set-role labeling conflict \u2014 warmup_labeled_set_at_working_effort(set 2 @ RPE 9). Nothing here is typed as a working set, so there is no top set to progress from, but the data says work was done. Re-label the working set(s) and the engine resumes.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Cable Crunch",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-07). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-08, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        }
      ],
      "sequencingAdvisory": "\"Dumbbell Incline Bicep Curl\" (isolation/accessory) is displayed before \"Dumbbell One Arm Row\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS (3-4 days)",
      "date": "2026-08-04",
      "prevDate": "2026-07-30",
      "nextAvailable": {
        "earliest": "2026-08-07",
        "latest": "2026-08-08",
        "fatigue_state": "elevated",
        "driver": "delts recovery (heavy stimulus, elevated fatigue, ~82h)"
      },
      "stats": [
        "61m",
        "17 sets",
        "14.2k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY C \u2014 DELTS / ABS (3-4 days) \u2014 4 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/6</b> prescriptions passed the validation gate."
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/14/12/17) \u2014 earn the jump; top set 22.5\u219225; +11.1% load costs ~4 reps, so the rep target drops 12\u21928 [range 6-8]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 22.5 for 12-14, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "6\u20138",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 15,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Band Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "band_resisted_isolation",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 14 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 65 lb band \u2014 chase reps to ~15 at RPE 9. Bands available: 35/45/55/65 only. Back-off holds its own last load (55) for 21 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 21,
                "rpe": 8
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 65.0,
                "reps": "14\u201321",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "21",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 94.37333333333333,
              "decisionScoreRaw": 94.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 91.70666666666668,
              "decisionScoreRaw": 91.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 88.42888888888888,
              "decisionScoreRaw": 88.42888888888888,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 87.37333333333333,
              "decisionScoreRaw": 87.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 88.04,
              "decisionScoreRaw": 88.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 20 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (13/15/13) \u2014 earn the jump; top set 20\u219222.5; +12.5% load costs ~4 reps, so the rep target drops 13\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 20 for 13-15, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 12.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 20,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 17.5,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 20,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 17.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 26.394166666666667,
              "decisionScoreRaw": 26.394166666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 25.29,
              "decisionScoreRaw": 25.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 25.081666666666663,
              "decisionScoreRaw": 25.081666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 24.1025,
              "decisionScoreRaw": 24.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 22.43583333333333,
              "decisionScoreRaw": 22.43583333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Strict form only",
            "No failure",
            "Continuous tension",
            "Pump and stretch focus",
            "Do not create spillover fatigue"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/11) \u2014 earn the jump; top set 30\u219232.5; +8.3% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (30) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 11,
                "rpe": 8
              },
              "prop": {
                "lbs": 30,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (the logged Day A session on 2026-08-06). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-07, past that. Advisory only -- no volume was changed.",
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Stay upright",
            "Elbows close to body",
            "Full lockout squeeze",
            "Controlled eccentric",
            "No bouncing",
            "Stop before shoulder discomfort"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 250 lb \u00d7 20 @ RPE 8 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set hit 20 (\u226515) reps \u2014 add bands 250\u2192275 lb and rebuild reps. Back-off earned its own jump too \u2014 250 for 13-15, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 20,
                "rpe": 5
              },
              "prop": {
                "lbs": 250.0,
                "reps": "4",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 250,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": 275.0,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 250,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 250.0,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2"
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 17 @ RPE 8 \u00b7 bodyweight \u00b7 anchor 20 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226520 at RPE 9 before adding external load. Back-off holds its own last load (bodyweight) for 15-17 \u2014 it has not reached the 20-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 0,
                "reps": 17,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "17\u201325",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "15\u201317",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null
        }
      ],
      "sequencingAdvisory": "\"Seated Lateral Raise\" (isolation/accessory) is displayed before \"Hanging Leg Raise\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    }
  ]
};
