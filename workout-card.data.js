window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-10-27",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-23",
      "nextAvailable": {
        "earliest": "2026-10-30",
        "latest": "2026-10-31",
        "fatigue_state": "moderate",
        "driver": "delts recovery (stretch stimulus, moderate fatigue, ~52h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-28T06:30:16.734645",
        "fatigue_signal": {
          "bent over row barbell": 1.0988843422943035,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.33131547412777057,
          "cross body hammer curl dumbbell": 0.30662172778904445,
          "hammer curl dumbbell": 0.25745140624999996,
          "hanging_leg_raise": 0.08906791201743097,
          "incline bench press barbell": 0.9000778309488933,
          "incline bicep curl dumbbell": 0.3609412397008856,
          "lateral raise band": 0.8107072584031167,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6812311329615531,
          "pull up assisted": 4.267758962877366,
          "rear_dumbbell_raise": 0.21198071193835816,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.2594283149553266,
          "triceps extension dumbbell": 0.5293482275453756,
          "triceps_pushdown": 3.0665516237385173
        },
        "fatigue_accumulation": {
          "session_id": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
          "session_date": "2026-10-25T00:00:00",
          "global_fatigue_score": 4.8272929191589355,
          "fatigue_trend_3": 4.304638385772705,
          "fatigue_trend_5": 5.054251194000244,
          "recovery_debt": 4.575367450714111
        },
        "deload_state": {
          "snapshot_date": "2026-10-27T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "debt",
          "fatigue_trigger": 4.8272929191589355,
          "regression_trigger": 0.7647058963775635,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "44m",
        "11 sets",
        "9.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 0 load\u2191 \u00b7 1 rep\u2191 \u00b7 2 hold \u00b7 2 non-primary excluded.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>3/5</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 2
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=4)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (25) for 13-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "13\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 977.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 34.3525,
              "decisionScoreRaw": 34.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": null
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 25.87333333333333,
              "decisionScoreRaw": 25.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": null
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 34.29,
              "decisionScoreRaw": 34.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": null
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 25.9775,
              "decisionScoreRaw": 25.9775,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": null
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 33.51916666666666,
              "decisionScoreRaw": 33.51916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": null
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
                "date": "2026-08-25",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
                "date": "2026-08-21",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
                "date": "2026-08-15",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              -1.0,
              1.0,
              1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "c21b07c4-b3c1-4fa6-9f13-b2903feb61ed",
            "date": "2026-10-23",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 12,
                "rpe": 9.0
              },
              {
                "lbs": 30.0,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-23 (96h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-23 (96h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-23 (96h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
              "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-23 (96h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-30 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Lateral Raise (Band)",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
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
          "action": "add_reps",
          "assess": "Last top set: 75 lb \u00d7 13 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2717 QC fail: action_contradicts_sets(action=add_reps,from=75,to=65)</b> \u00b7 Hold 65 lb band \u2014 chase reps to ~15 at RPE 9. Bands available: 35/45/55/65 only. Back-off already reached its own 15-rep anchor at its own load (65) for 17-19 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Already at the heaviest available resistance; progress reps, tempo and ROM before any new load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 65.0,
                "reps": "14\u201320",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 75,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 65.0,
                "reps": "17\u201319",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2080.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 91.37333333333333,
              "decisionScoreRaw": 91.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 22.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 83.99833333333335,
              "decisionScoreRaw": 83.99833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 21.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 82.54,
              "decisionScoreRaw": 82.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 76.83166666666666,
              "decisionScoreRaw": 76.83166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 80.04,
              "decisionScoreRaw": 80.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "2c8fde91-d70f-404f-bed2-00974c60d16a",
            "date": "2026-10-10",
            "sets": [
              {
                "lbs": 45.0,
                "reps": 20,
                "rpe": null
              },
              {
                "lbs": 55.0,
                "reps": 18,
                "rpe": 9.0
              },
              {
                "lbs": 65.0,
                "reps": 20,
                "rpe": 9.0
              },
              {
                "lbs": 55.0,
                "reps": 8,
                "rpe": 6.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-10 (408h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-23 (96h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Day C wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-10 (408h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
              "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-23 (96h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-30 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=4)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (27.5) for 13-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "13\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 717.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 36.01916666666666,
              "decisionScoreRaw": 36.01916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 7,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 36.74833333333333,
              "decisionScoreRaw": 36.74833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 15.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 35.24833333333333,
              "decisionScoreRaw": 35.24833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 31.873333333333335,
              "decisionScoreRaw": 31.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 10,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 30.456666666666663,
              "decisionScoreRaw": 30.456666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 27.5,
                "actualReps": 10.0,
                "loadDelta": -2,
                "repDelta": -5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "c21b07c4-b3c1-4fa6-9f13-b2903feb61ed",
            "date": "2026-10-23",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 11,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-23 (96h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-10-23 (96h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Day C wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-23 (96h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-23 (96h ago).",
              "Most recent qualifying shoulder_rear cluster exposure: 2026-10-23 (96h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-30 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Triceps Extension (Dumbbell)",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 72.5 lb \u00d7 10 @ RPE 9 and 65 lb \u00d7 10 @ RPE 9 on 2026-10-25. Today's Day C occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 supplemental_target_unmapped(exercise=triceps_extension_dumbbell), equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Supplemental volume \u2014 Triceps Extension (Dumbbell) received its primary progression work on 2026-10-25. Prescribe 30 lb \u00d7 8 @ RPE 5, then 50 lb \u00d7 17 @ RPE 8 and 45 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 72.5 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 80 lb.",
          "when_to_add_load": "Reach 12 clean reps at 72.5 lb at RPE 9.5 or lower; then increase to 80 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 50,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 45,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 65,
                "reps": 14,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 1930.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-30, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
            "date": "2026-10-25",
            "sets": [
              {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 65.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 45.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-25 (48h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-10-25 (48h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-25 (48h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day B (2026-10-29, 48h away).",
            "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
            "Level 4 decided: exact-exercise exposure 48h ago against a 50h recovery window -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "history_inference",
            "governingSource": "band_l4",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (0).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'highest relative load'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Day B wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-25 (48h ago).",
              "Most recent qualifying triceps muscle exposure: 2026-10-25 (48h ago).",
              "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-25 (48h ago).",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Upcoming primary exposure expected on day B (2026-10-29, 48h away).",
              "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
              "Level 4 decided: exact-exercise exposure 48h ago against a 50h recovery window -> supplemental_volume.",
              "Forward projection: target exposure 2026-10-30 (source=estimated); governing source=band_l4. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
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
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 300 lb \u00d7 12 @ RPE 9 and 275 lb \u00d7 12 @ RPE 9 on 2026-10-25. Today's Day C occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 supplemental_target_unmapped(exercise=triceps_pushdown)</b> \u00b7 Supplemental volume \u2014 Triceps Pushdown received its primary progression work on 2026-10-25. Prescribe 135 lb \u00d7 8 @ RPE 5, then 200 lb \u00d7 17 @ RPE 8 and 195 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 300 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 305 lb.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 275,
                "reps": 16,
                "rpe": 8
              },
              "prop": {
                "lbs": 135,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 200,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 250,
                "reps": 16,
                "rpe": 8
              },
              "prop": {
                "lbs": 195,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 4000.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-30, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
            "date": "2026-10-25",
            "sets": [
              {
                "lbs": 300.0,
                "reps": 12,
                "rpe": 9.0
              },
              {
                "lbs": 200.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 275.0,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-25 (48h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-10-25 (48h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-25 (48h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day B (2026-10-29, 48h away).",
            "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
            "Level 4 decided: exact-exercise exposure 48h ago against a 50h recovery window -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "history_inference",
            "governingSource": "band_l4",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-25 (48h ago).",
              "Most recent qualifying triceps muscle exposure: 2026-10-25 (48h ago).",
              "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-25 (48h ago).",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Upcoming primary exposure expected on day B (2026-10-29, 48h away).",
              "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
              "Level 4 decided: exact-exercise exposure 48h ago against a 50h recovery window -> supplemental_volume.",
              "Forward projection: target exposure 2026-10-30 (source=estimated); governing source=band_l4. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS",
      "date": "2026-10-25",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-18",
      "nextAvailable": {
        "earliest": "2026-10-29",
        "latest": "2026-10-30",
        "fatigue_state": "elevated",
        "driver": "chest recovery (heavy stimulus, elevated fatigue, ~84h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-28T06:30:16.734645",
        "fatigue_signal": {
          "bent over row barbell": 1.0988843422943035,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.33131547412777057,
          "cross body hammer curl dumbbell": 0.30662172778904445,
          "hammer curl dumbbell": 0.25745140624999996,
          "hanging_leg_raise": 0.08906791201743097,
          "incline bench press barbell": 0.9000778309488933,
          "incline bicep curl dumbbell": 0.3609412397008856,
          "lateral raise band": 0.8107072584031167,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6812311329615531,
          "pull up assisted": 4.267758962877366,
          "rear_dumbbell_raise": 0.21198071193835816,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.2594283149553266,
          "triceps extension dumbbell": 0.5293482275453756,
          "triceps_pushdown": 3.0665516237385173
        },
        "fatigue_accumulation": {
          "session_id": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
          "session_date": "2026-10-25T00:00:00",
          "global_fatigue_score": 4.8272929191589355,
          "fatigue_trend_3": 4.304638385772705,
          "fatigue_trend_5": 5.054251194000244,
          "recovery_debt": 4.575367450714111
        },
        "deload_state": {
          "snapshot_date": "2026-10-27T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "debt",
          "fatigue_trigger": 4.8272929191589355,
          "regression_trigger": 0.7647058963775635,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "58m",
        "8 sets",
        "11.0k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY B - CHEST / TRICEPS \u2014 0 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold \u00b7 2 non-primary excluded.",
        "assess": "4 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>4/4</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 2
      },
      "exercises": [
        {
          "name": "Incline Bench Press (Barbell)",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": "chest",
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 150 lb \u00d7 7 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=barbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 150 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (137.5) for 7-9 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 150 lb at RPE 9.5 or lower; then increase to 155 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 80,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 121,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 7,
                "rpe": 8
              },
              "prop": {
                "lbs": 150,
                "reps": "8\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 7,
                "rpe": 8
              },
              "prop": {
                "lbs": 137.5,
                "reps": "7\u20139",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2012.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 165.13166666666663,
              "decisionScoreRaw": 165.13166666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 165.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 167.05666666666664,
              "decisionScoreRaw": 167.05666666666664,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 165.0,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-06",
              "decision": "hold",
              "decisionScore": 163.90333333333334,
              "decisionScoreRaw": 163.90333333333334,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
              "outcome": {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-01",
              "decision": "hold",
              "decisionScore": 159.13666666666666,
              "decisionScoreRaw": 159.13666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
              "outcome": {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-27",
              "decision": "hold",
              "decisionScore": 157.93583333333333,
              "decisionScoreRaw": 157.93583333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
              "outcome": {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "3922b5c0-8564-4a93-a378-e52a37ab2e80",
            "date": "2026-10-18",
            "sets": [
              {
                "lbs": 154.0,
                "reps": 5,
                "rpe": 9.0
              },
              {
                "lbs": 165.0,
                "reps": 5,
                "rpe": 10.0
              },
              {
                "lbs": 132.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 88.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying chest muscle exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying push_horizontal cluster exposure: 2026-10-18 (168h ago).",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 78h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-29",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'highest relative load'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Day B wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying chest muscle exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying push_horizontal cluster exposure: 2026-10-18 (168h ago).",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 78h.",
              "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-29 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Chest Fly (Dumbbell)",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": "chest",
          "rest": "2:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 50 lb \u00d7 8 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 50 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (45) for 8-10 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 50 lb at RPE 9.5 or lower; then increase to 55 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 30,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 50,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50,
                "reps": "9\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 8
              },
              "prop": {
                "lbs": 45,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 760.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 53.873333333333335,
              "decisionScoreRaw": 53.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 50.0,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 54.84555555555555,
              "decisionScoreRaw": 54.84555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 47.5,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-06",
              "decision": "hold",
              "decisionScore": 52.23444444444445,
              "decisionScoreRaw": 52.23444444444445,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
              "outcome": {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 47.5,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-01",
              "decision": "hold",
              "decisionScore": 51.59555555555555,
              "decisionScoreRaw": 51.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
              "outcome": {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 45.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-27",
              "decision": "hold",
              "decisionScore": 46.84555555555555,
              "decisionScoreRaw": 46.84555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
              "outcome": {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 45.0,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "3922b5c0-8564-4a93-a378-e52a37ab2e80",
            "date": "2026-10-18",
            "sets": [
              {
                "lbs": 45.0,
                "reps": 10,
                "rpe": 8.0
              },
              {
                "lbs": 55.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 30.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying chest muscle exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying chest_isolation cluster exposure: 2026-10-18 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 54h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-29",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'highest relative load'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Day B wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying chest muscle exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying chest_isolation cluster exposure: 2026-10-18 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 54h.",
              "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-29 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Triceps Extension (Dumbbell)",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
          "rest": "2:30",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 55 lb \u00d7 12 @ RPE 8 and 65 lb \u00d7 14 @ RPE 8 on 2026-10-27. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 supplemental_target_unmapped(exercise=triceps_extension_dumbbell), equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 <b>Forward projection: supplemental_volume (tightened, governing source owner_day_l3)</b> \u00b7 Supplemental volume \u2014 Triceps Extension (Dumbbell) received its primary progression work on 2026-10-27. Prescribe 30 lb \u00d7 8 @ RPE 5, then 45 lb \u00d7 17 @ RPE 8 and 40 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 65 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 70 lb.",
          "when_to_add_load": "Reach 12 clean reps at 65 lb at RPE 9.5 or lower; then increase to 70 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 45,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 1375.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=primary_progression).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "a4f99227-938b-4afe-9ced-370c05301f0f",
            "date": "2026-10-27",
            "sets": [
              {
                "lbs": 55.0,
                "reps": 12,
                "rpe": 8.0
              },
              {
                "lbs": 65.0,
                "reps": 14,
                "rpe": 8.0
              },
              {
                "lbs": 45.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-18 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "tightened",
            "targetExposureDate": "2026-10-29",
            "targetDateSource": "estimated",
            "projected": true,
            "band": "supplemental_volume",
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (0).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'highest relative load'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Day B wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying triceps muscle exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-18 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-29 (source=estimated); governing source=owner_day_l3. Binding evidence: exact tier, 2026-10-27 (48h before target) against a 50h recovery window -> supplemental_volume. Future role tightened relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
          "rest": "2:00",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 250 lb \u00d7 16 @ RPE 8 and 275 lb \u00d7 16 @ RPE 8 on 2026-10-27. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 supplemental_target_unmapped(exercise=triceps_pushdown)</b> \u00b7 <b>Forward projection: supplemental_volume (tightened, governing source owner_day_l3)</b> \u00b7 Supplemental volume \u2014 Triceps Pushdown received its primary progression work on 2026-10-27. Prescribe 185 lb \u00d7 17 @ RPE 8 and 180 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 275 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 280 lb.",
          "when_to_add_load": "Reach 12 clean reps at 275 lb at RPE 9.5 or lower; then increase to 280 lb.",
          "sets": [
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 185,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 275,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 180,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 6900.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=primary_progression).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "a4f99227-938b-4afe-9ced-370c05301f0f",
            "date": "2026-10-27",
            "sets": [
              {
                "lbs": 250.0,
                "reps": 16,
                "rpe": 8.0
              },
              {
                "lbs": 275.0,
                "reps": 16,
                "rpe": 8.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-10-18 (168h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-18 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "tightened",
            "targetExposureDate": "2026-10-29",
            "targetDateSource": "estimated",
            "projected": true,
            "band": "supplemental_volume",
            "ceiling": null,
            "reasons": [
              "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
              "Day B wins 'highest top-set effort (RPE)'.",
              "Day B wins 'greatest qualifying working-set count'.",
              "Day B wins 'consistent top-set-plus-backoff structure'.",
              "Day B wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying triceps muscle exposure: 2026-10-18 (168h ago).",
              "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-18 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-29 (source=estimated); governing source=owner_day_l3. Binding evidence: exact tier, 2026-10-27 (48h before target) against a 50h recovery window -> supplemental_volume. Future role tightened relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS",
      "date": "2026-10-24",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-17",
      "nextAvailable": {
        "earliest": "2026-10-28",
        "latest": "2026-10-29",
        "fatigue_state": "elevated",
        "driver": "back recovery (heavy stimulus, elevated fatigue, ~86h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-28T06:30:16.734645",
        "fatigue_signal": {
          "bent over row barbell": 1.0988843422943035,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.33131547412777057,
          "cross body hammer curl dumbbell": 0.30662172778904445,
          "hammer curl dumbbell": 0.25745140624999996,
          "hanging_leg_raise": 0.08906791201743097,
          "incline bench press barbell": 0.9000778309488933,
          "incline bicep curl dumbbell": 0.3609412397008856,
          "lateral raise band": 0.8107072584031167,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6812311329615531,
          "pull up assisted": 4.267758962877366,
          "rear_dumbbell_raise": 0.21198071193835816,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.2594283149553266,
          "triceps extension dumbbell": 0.5293482275453756,
          "triceps_pushdown": 3.0665516237385173
        },
        "fatigue_accumulation": {
          "session_id": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
          "session_date": "2026-10-25T00:00:00",
          "global_fatigue_score": 4.8272929191589355,
          "fatigue_trend_3": 4.304638385772705,
          "fatigue_trend_5": 5.054251194000244,
          "recovery_debt": 4.575367450714111
        },
        "deload_state": {
          "snapshot_date": "2026-10-27T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "debt",
          "fatigue_trigger": 4.8272929191589355,
          "regression_trigger": 0.7647058963775635,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "67m",
        "10 sets",
        "10.1k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY A \u2014 BACK / BICEPS \u2014 1 load\u2191 \u00b7 3 rep\u2191 \u00b7 1 hold.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/5</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 0
      },
      "exercises": [
        {
          "name": "Pull Up (Assisted)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "lats",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stalli"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 150 assist \u00d7 13 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 150 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (175) for 11-13 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 15 clean reps with 150 lb assistance at RPE 10 or lower; then reduce assistance to 125 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 200.0,
                "reps": "10",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": 175.0,
                "reps": "6",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 150.0,
                "reps": "14\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 175,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 3875.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: increase (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "increase",
              "decisionScore": 532.3316666666667,
              "decisionScoreRaw": 532.3316666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 225.0,
                "actualReps": 6.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "increase",
              "decisionScore": 560.04,
              "decisionScoreRaw": 560.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "increase",
              "decisionScore": 562.9566666666667,
              "decisionScoreRaw": 562.9566666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "increase",
              "decisionScore": 576.7066666666666,
              "decisionScoreRaw": 576.7066666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "increase",
              "decisionScore": 543.2483333333333,
              "decisionScoreRaw": 543.2483333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 220.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "d764d3ea-3ea5-405c-a904-17ff28021091",
            "date": "2026-05-13",
            "sets": [
              {
                "lbs": 175.0,
                "reps": 6,
                "rpe": 10.0
              },
              {
                "lbs": 150.0,
                "reps": 9,
                "rpe": 10.0
              },
              {
                "lbs": 150.0,
                "reps": 7,
                "rpe": 8.5
              },
              {
                "lbs": 150.0,
                "reps": 7,
                "rpe": 7.5
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior lats muscle exposure found.",
            "No qualifying prior pull_vertical cluster exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group lats, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-28",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day A inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
              "Day A wins 'highest top-set effort (RPE)'.",
              "Day A wins 'highest relative load'.",
              "Day A wins 'greatest qualifying working-set count'.",
              "Day A wins 'rotation frequency (most appearances)'.",
              "Day A wins 'existing progression history'.",
              "No qualifying prior exact-exercise exposure found.",
              "No qualifying prior lats muscle exposure found.",
              "No qualifying prior pull_vertical cluster exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, muscle group lats, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
              "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-28 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Bent Over Row (Barbell)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "upperback",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 148.5 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=barbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 148.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (137.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 148.5 lb at RPE 9.5 or lower; then increase to 155 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 80,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 126.5,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": "T",
              "last": {
                "lbs": 148.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 148.5,
                "reps": "11\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 10,
                "rpe": 8
              },
              "prop": {
                "lbs": 137.5,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2860.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 164.9025,
              "decisionScoreRaw": 164.9025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 163.48166666666665,
              "decisionScoreRaw": 163.48166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 154.0,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 158.9441666666667,
              "decisionScoreRaw": 158.9441666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 154.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 157.79833333333332,
              "decisionScoreRaw": 157.79833333333332,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 148.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 151.53166666666667,
              "decisionScoreRaw": 151.53166666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 148.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1eba63be-4015-4ada-ba90-39e837f2f4f7",
            "date": "2026-10-17",
            "sets": [
              {
                "lbs": 143.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 159.5,
                "reps": 8,
                "rpe": 9.0
              },
              {
                "lbs": 132.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 88.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying upperback muscle exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-10-17 (168h ago).",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-28",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day A wins 'highest top-set effort (RPE)'.",
              "Day A wins 'highest relative load'.",
              "Day A wins 'greatest qualifying working-set count'.",
              "Day A wins 'consistent top-set-plus-backoff structure'.",
              "Day A wins 'rotation frequency (most appearances)'.",
              "Day A wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying upperback muscle exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying pull_horizontal cluster exposure: 2026-10-17 (168h ago).",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
              "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-28 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:30",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 37.5 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 All working sets near the top (12/13) \u2014 earn the jump; top set 37.5\u219240; +6.7% load costs ~2 reps, so the rep target drops 12\u219210 [range 8-10]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 35 for 11-13, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 37.5 lb at RPE 9.5 or lower; then increase to 40 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 37.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 840.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-10-25). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-27, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 27.29,
              "decisionScoreRaw": 27.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 22.5,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 39.59555555555555,
              "decisionScoreRaw": 39.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 29.356666666666666,
              "decisionScoreRaw": 29.356666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 22.8,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 29.762222222222217,
              "decisionScoreRaw": 29.762222222222217,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 20.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 39.95666666666666,
              "decisionScoreRaw": 39.95666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1eba63be-4015-4ada-ba90-39e837f2f4f7",
            "date": "2026-10-17",
            "sets": [
              {
                "lbs": 30.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 40.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 4/6 ownership signals over the runner-up (1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying biceps muscle exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-17 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-28",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day A inferred as primary owner: won 4/6 ownership signals over the runner-up (1).",
              "Day A wins 'highest top-set effort (RPE)'.",
              "Day A wins 'highest relative load'.",
              "Day A wins 'greatest qualifying working-set count'.",
              "Day A wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying biceps muscle exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-17 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-28 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "One Arm Row (Dumbbell)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "upperback",
          "rest": "2:30",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 80 lb \u00d7 11 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 80 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off already reached its own 12-rep anchor at its own load (70) for 12-14 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 80 lb at RPE 9.5 or lower; then increase to 85 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 45,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 65,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 80,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 80,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 70,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": 70,
                "reps": "12\u201314",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1720.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 90.06083333333335,
              "decisionScoreRaw": 90.06083333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 85.0,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 86.915,
              "decisionScoreRaw": 86.915,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 80.0,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 83.3525,
              "decisionScoreRaw": 83.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 77.5,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 84.29,
              "decisionScoreRaw": 84.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 75.0,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 83.665,
              "decisionScoreRaw": 83.665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 75.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1eba63be-4015-4ada-ba90-39e837f2f4f7",
            "date": "2026-10-17",
            "sets": [
              {
                "lbs": 50.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 75.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 85.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 70.0,
                "reps": 5,
                "rpe": 6.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying upperback muscle exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-10-17 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-28",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day A wins 'highest top-set effort (RPE)'.",
              "Day A wins 'highest relative load'.",
              "Day A wins 'greatest qualifying working-set count'.",
              "Day A wins 'consistent top-set-plus-backoff structure'.",
              "Day A wins 'rotation frequency (most appearances)'.",
              "Day A wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying upperback muscle exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying pull_horizontal cluster exposure: 2026-10-17 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
              "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-28 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Cross Body Hammer Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 35 lb \u00d7 13 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4), isolation_load_jump_capped(from=35,to=40,pct=14.2857,predicted_reps=6)</b> \u00b7 Hold 35 \u2014 the smallest available step (35\u219240) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 35, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (30) for 13-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 35 lb at RPE 9.5 or lower; then increase to 40 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 35,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "13\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "13\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 845.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-10-25). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-27, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 39.178888888888885,
              "decisionScoreRaw": 39.178888888888885,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 38.401111111111106,
              "decisionScoreRaw": 38.401111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 40.73444444444444,
              "decisionScoreRaw": 40.73444444444444,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 38.901111111111106,
              "decisionScoreRaw": 38.901111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 35.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 38.901111111111106,
              "decisionScoreRaw": 38.901111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 35.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1eba63be-4015-4ada-ba90-39e837f2f4f7",
            "date": "2026-10-17",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 35.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 37.5,
                "reps": 8,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying biceps muscle exposure: 2026-10-17 (168h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-17 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-28",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day A wins 'highest top-set effort (RPE)'.",
              "Day A wins 'highest relative load'.",
              "Day A wins 'greatest qualifying working-set count'.",
              "Day A wins 'consistent top-set-plus-backoff structure'.",
              "Day A wins 'rotation frequency (most appearances)'.",
              "Day A wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying biceps muscle exposure: 2026-10-17 (168h ago).",
              "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-17 (168h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
              "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-28 (source=estimated); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": "\"Incline Bicep Curl (Dumbbell)\" (isolation/accessory) is displayed before \"One Arm Row (Dumbbell)\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-10-23",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-10",
      "nextAvailable": {
        "earliest": "2026-10-26",
        "latest": "2026-10-27",
        "fatigue_state": "moderate",
        "driver": "delts recovery (stretch stimulus, moderate fatigue, ~52h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-28T06:30:16.734645",
        "fatigue_signal": {
          "bent over row barbell": 1.0988843422943035,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.33131547412777057,
          "cross body hammer curl dumbbell": 0.30662172778904445,
          "hammer curl dumbbell": 0.25745140624999996,
          "hanging_leg_raise": 0.08906791201743097,
          "incline bench press barbell": 0.9000778309488933,
          "incline bicep curl dumbbell": 0.3609412397008856,
          "lateral raise band": 0.8107072584031167,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6812311329615531,
          "pull up assisted": 4.267758962877366,
          "rear_dumbbell_raise": 0.21198071193835816,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.2594283149553266,
          "triceps extension dumbbell": 0.5293482275453756,
          "triceps_pushdown": 3.0665516237385173
        },
        "fatigue_accumulation": {
          "session_id": "3fc6ff6d-3e4e-4b70-baf5-676e39ca37f4",
          "session_date": "2026-10-25T00:00:00",
          "global_fatigue_score": 4.8272929191589355,
          "fatigue_trend_3": 4.304638385772705,
          "fatigue_trend_5": 5.054251194000244,
          "recovery_debt": 4.575367450714111
        },
        "deload_state": {
          "snapshot_date": "2026-10-27T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "debt",
          "fatigue_trigger": 4.8272929191589355,
          "regression_trigger": 0.7647058963775635,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "44m",
        "9 sets",
        "3.9k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 0 load\u2191 \u00b7 2 rep\u2191 \u00b7 2 hold.",
        "assess": "4 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>2/4</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 0
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=4)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (25) for 12-14 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "12\u201314",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 952.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 34.3525,
              "decisionScoreRaw": 34.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": null
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 25.87333333333333,
              "decisionScoreRaw": 25.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": null
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 34.29,
              "decisionScoreRaw": 34.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": null
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 25.9775,
              "decisionScoreRaw": 25.9775,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": null
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 33.51916666666666,
              "decisionScoreRaw": 33.51916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": null
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
                "date": "2026-08-25",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
                "date": "2026-08-21",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
                "date": "2026-08-15",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              -1.0,
              1.0,
              1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "2c8fde91-d70f-404f-bed2-00974c60d16a",
            "date": "2026-10-10",
            "sets": [
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 30.0,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-10 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-27",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-10 (312h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-27 (source=actual, session a4f99227-938b-4afe-9ced-370c05301f0f); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Lateral Raise (Band)",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
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
          "action": "add_reps",
          "assess": "Last top set: 75 lb \u00d7 12 @ RPE 7 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2717 QC fail: action_contradicts_sets(action=add_reps,from=75,to=65)</b> \u00b7 Hold 65 lb band \u2014 chase reps to ~15 at RPE 9. Bands available: 35/45/55/65 only. Back-off already reached its own 15-rep anchor at its own load (65) for 18-20 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Already at the heaviest available resistance; progress reps, tempo and ROM before any new load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 65.0,
                "reps": "13\u201320",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 75,
                "reps": 12,
                "rpe": 7
              },
              "prop": {
                "lbs": 65.0,
                "reps": "18\u201320",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 65,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2070.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 91.37333333333333,
              "decisionScoreRaw": 91.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 22.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 83.99833333333335,
              "decisionScoreRaw": 83.99833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 21.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 82.54,
              "decisionScoreRaw": 82.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 76.83166666666666,
              "decisionScoreRaw": 76.83166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 80.04,
              "decisionScoreRaw": 80.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "2c8fde91-d70f-404f-bed2-00974c60d16a",
            "date": "2026-10-10",
            "sets": [
              {
                "lbs": 45.0,
                "reps": 20,
                "rpe": null
              },
              {
                "lbs": 55.0,
                "reps": 18,
                "rpe": 9.0
              },
              {
                "lbs": 65.0,
                "reps": 20,
                "rpe": 9.0
              },
              {
                "lbs": 55.0,
                "reps": 8,
                "rpe": 6.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-10 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-27",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Day C wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-10 (312h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-27 (source=actual, session a4f99227-938b-4afe-9ced-370c05301f0f); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 30 lb \u00d7 11 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 30 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (27.5) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 632.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 36.01916666666666,
              "decisionScoreRaw": 36.01916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 7,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 36.74833333333333,
              "decisionScoreRaw": 36.74833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 15.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 35.24833333333333,
              "decisionScoreRaw": 35.24833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 31.873333333333335,
              "decisionScoreRaw": 31.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 10,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 30.456666666666663,
              "decisionScoreRaw": 30.456666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 27.5,
                "actualReps": 10.0,
                "loadDelta": -2,
                "repDelta": -5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "2c8fde91-d70f-404f-bed2-00974c60d16a",
            "date": "2026-10-10",
            "sets": [
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 30.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-10-10 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-27",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Day C wins 'existing progression history'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulders muscle exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying shoulder_rear cluster exposure: 2026-10-10 (312h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-27 (source=actual, session a4f99227-938b-4afe-9ced-370c05301f0f); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "muscleGroup": "abdominals",
          "rest": "1:30",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 10 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 set_role_conflict(warmup_labeled_set_at_working_effort(set 1 @ RPE 9))</b> \u00b7 Hold 10 \u2014 isolation: not every working set is within 2 reps of the 12 anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off already reached its own 12-rep anchor at its own load (10) for 16 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 10 lb at RPE 9.5 or lower; then increase to 15 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 0,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 5,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 10,
                "reps": "12\u201316",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 10,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 10,
                "reps": "16",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 10,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 280.0,
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "2c8fde91-d70f-404f-bed2-00974c60d16a",
            "date": "2026-10-10",
            "sets": [
              {
                "lbs": null,
                "reps": 20,
                "rpe": 9.0
              },
              {
                "lbs": 10.0,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 10.0,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying abdominals muscle exposure: 2026-10-10 (312h ago).",
            "Most recent qualifying core_hip_flexion cluster exposure: 2026-10-10 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group abdominals, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 48h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "history_inference",
            "governingSource": "owner_day_l3",
            "change": "unchanged",
            "targetExposureDate": "2026-10-27",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
              "Day C wins 'highest top-set effort (RPE)'.",
              "Day C wins 'highest relative load'.",
              "Day C wins 'greatest qualifying working-set count'.",
              "Day C wins 'consistent top-set-plus-backoff structure'.",
              "Day C wins 'rotation frequency (most appearances)'.",
              "Most recent qualifying exact-exercise exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying abdominals muscle exposure: 2026-10-10 (312h ago).",
              "Most recent qualifying core_hip_flexion cluster exposure: 2026-10-10 (312h ago).",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (stretch stimulus, muscle group abdominals, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 48h.",
              "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
              "Forward projection: target exposure 2026-10-27 (source=actual, session a4f99227-938b-4afe-9ced-370c05301f0f); governing source=owner_day_l3. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    }
  ]
};
