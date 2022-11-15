const startingAbilities = [
  {
    name: 'Battleborn',
    shortDesc: 'You may expend your special armor to reduce harm from an attack in combat or to push yourself during a fight.',
    detail: `When you use this ability, tick the special armor box on your playbook sheet. If you “reduce harm” that means the level of harm you're facing right now is reduced by one. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don't take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: 'Bodyguard',
    shortDesc: `When you protect a teammate, take +1d to your resistance roll. When you gather info to anticipate possible threats in the current situation, you get +1 effect.`,
    detail: `The protect teamwork maneuver lets you face a consequence for a teammate. If you choose to resist that consequence, this ability gives you +1d to your resistance roll. Also, when you read a situation to gather information about hidden dangers or potential attackers, you get +1 effect—which means more detailed information.`
  },
  {
    name: 'Arcane fighter',
    shortDesc: `You may imbue your hands, melee weapons, or tools with spirit energy. You gain potency in combat vs. the supernatural.`,
    detail: `When you imbue yourself with arcane energy, how do you do it? What does it look like when the energy manifests?`
  },
  {
    name: 'Leader',
    shortDesc: `When you Command a cohort in combat, they continue to fight when they would otherwise break (they’re not taken out when they suffer level 3 harm). They gain +1 effect and 1 armor.`,
    detail: `This ability makes your cohorts more effective in battle and also allows them to resist harm by using armor. While you lead your cohorts, they won’t stop fighting until they take fatal harm (level 4) or you order them to cease. What do you do to inspire such bravery in battle?`
  },
  {
    name: 'Mule',
    shortDesc: `Your load limits are higher. Light: 5. Normal: 7. Heavy: 8.`,
    detail: `This ability is great if you want to wear heavy armor and pack a heavy weapon without attracting lots of attention. Since your exact gear is determined on-the-fly during an operation, having more load also gives you more options to get creative with when dealing with problems during a score.`
  },
  {
    name: 'Not to be trifled with',
    shortDesc: `You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.`,
    detail: `When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability. If you perform a feat that verges on the superhuman, you might break a metal weapon with your bare hands, tackle a galloping horse, lift a huge weight, etc. If you engage a small gang on equal footing, you don’t suffer reduced effect due to scale against a small gang (up to six people).`
  },
  {
    name: 'Savage',
    shortDesc: `When you unleash physical violence, it’s especially frightening. When you Command a frightened target, take +1d.`,
    detail: `You instill fear in those around you when you get violent. How they react depends on the person. Some people will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC. In addition, when you Command someone who’s affected by fear (from this ability or otherwise), take +1d to your roll.`
  },
  {
    name: 'Vigorous',
    shortDesc: `You recover from harm faster. Permanently fill in one of your healing clock segments. Take +1d to healing treatment rolls.`,
    detail: `Your healing clock becomes a 3-clock, and you get a bonus die when you recover.`,
  },
  {
    name: `Sharpshooter`,
    shortDesc: `You can push yourself to do one of the following: make a ranged attack at extreme distance beyond what’s normal for the weapon—unleash a barrage of rapid fire to suppress the enemy.`,
    detail: `When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability. The first use of this ability allows you to attempt long-range sniper shots that would otherwise be impossible with typical rudimentary firearms. The second use allows you to keep up a steady rate of fire in a battle (enough to “suppress” a small gang up to six people), rather than stopping for a slow reload or discarding a gun after each shot. When an enemy is suppressed, they’re reluctant to maneuver or attack (usually calling for a fortune roll to see if they can manage it).`
  },
  {
    name: `Focused`,
    shortDesc: `You may expend your special armor to resist a consequence of surprise or mental harm (fear, confusion, losing track of someone) or to push yourself for ranged combat or tracking.`,
    detail: `When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: `Scout`,
    shortDesc: `When you gather information to discover the location of a target, you get +1 effect. When you hide in a prepared position or use camouflage you get +1d to rolls to avoid detection.`,
    details: `A “target” can be a person, a destination, a good ambush spot, an item, etc.`
  },
  {
    name: `Tough as nails`,
    shortDesc: `Penalties from harm are one level less severe (though level 4 harm is still fatal).`,
    details: `With this ability, level 3 harm doesn’t incapacitate you; instead you take -1d to your rolls (as if it were level 2 harm). Level 2 harm affects you as if it were level 1 (less effect). Level 1 harm has no effect on you (but you still write it on your sheet, and must recover to heal it). Record the harm at its original level—for healing purposes, the original harm level applies.`
  },
  {
    name: `Vengeful`,
    shortDesc: `You gain an additional xp trigger: You got payback against someone who harmed you or someone you care about. If your crew helped you get payback, also mark crew xp.`,
    details: ``
  },
  {
    name: `Alchemist`,
    shortDesc: `When you invent or craft a creation with alchemical features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special formula already known.`,
    details: `Follow the Inventing procedure with the GM to define your first special alchemical formula.`
  },
  {
    name: 'Analyst',
    shortDesc: `During downtime, you get two ticks to distribute among any long term project clocks that involve investigation or learning a new formula or design plan.`,
    details: ``
  },
  {
    name: 'Artificer',
    shortDesc: 'When you invent or craft a creation with spark-craft features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special design already known.',
    details: `Follow the Inventing procedure with the GM to define your first spark-craft design.`
  },
  {
    name: 'Fortitude',
    shortDesc: `You may expend your special armor to resist a consequence of fatigue, weakness, or chemical effects, or to push yourself when working with technical skill or handling alchemicals.`,
    details: `When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: 'Supernatural Ward',
    shortDesc: `When you Wreck an area with arcane substances, ruining it for any other use, it becomes anathema or enticing to the supernatural (your choice).`,
    details: `If you make an area anathema to the supernatural, they will do everything they can to avoid it, and will suffer torment if forced inside the area. If you make an area enticing to spirits, they will seek it out and linger in the area, and will suffer torment if forced to leave. This effect lasts for several days over an area the size of a small room. Particularly powerful or prepared entities may roll their quality or arcane magnitude to see how well they’re able to resist the effect.`
  },
  {
    name: 'Saboteur',
    shortDesc: 'When you Wreck, your work is much quieter than it should be and the damage is very well-hidden from casual inspection.',
    details: 'You can drill holes in things, melt stuff with acid, even use a muffled explosive, and it will all be very quiet and extremely hard to notice.'
  },
  {
    name: 'Infiltrator',
    shortDesc: 'You are not affected by quality or Tier when you bypass security measures.',
    details: `This ability lets you contend with higher-Tier enemies on equal footing. When you’re cracking a safe, picking a lock, or sneaking past elite guards, your effect level is never reduced due to superior Tier or quality level of your opposition. Are you a renowned safe cracker? Do people tell stories of how you slipped under the noses of two Chief Inspectors, or are your exceptional talents yet to be discovered?`
  },
  {
    name: `Ambush`,
    shortDesc: `When you attack from hiding or spring a trap, you get +1d to your roll.`,
    details: `This ability benefits from preparation— so don’t forget you can do that in a flashback.`
  },
  {
    name: `Daredevil`,
    shortDesc: `When you roll a desperate action, you get +1d to your roll if you also take -1d to any resistance rolls against consequences from your action.`,
    details: `This special ability is a bit of a gamble. The bonus die helps you, but if you suffer consequences, they’ll probably be more costly to resist. But hey, you’re a daredevil, so no big deal, right?`
  },
  {
    name: `The Devil’s Footsteps`,
    shortDesc: `You can push yourself to do one of the following: perform a feat of athletics that verges on the superhuman—maneuver to confuse your enemies so they mistakenly attack each other.`,
    details: `When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability. If you perform an athletic feat (running, tumbling, balance, climbing, etc.) that verges on the superhuman, you might climb a sheer surface that lacks good hand-holds, tumble safely out of a three-story fall, leap a shocking distance, etc. If you maneuver to confuse your enemies, they attack each other for a moment before they realize their mistake. The GM might make a fortune roll to see how badly they harm or interfere with each other.`
  },
  {
    name: `Expertise`,
    shortDesc: `Choose one of your action ratings. When you lead a group action using that action, you can suffer only 1 stress at most, regardless of the number of failed rolls.`,
    details: `This special ability is good for covering for your team. If they’re all terrible at your favored action, you don’t have to worry about suffering a lot of stress when you lead their group action.`
  },
  {
    name: `Reflexes`,
    shortDesc: `When there’s a question about who acts first, the answer is you.`,
    details: `This ability gives you the initiative in most situations. Some specially trained NPCs might also have reflexes, but otherwise, you’re always the first to act, and can interrupt anyone else who tries to beat you to the punch. This ability usually doesn’t negate the need to make an action roll that you would otherwise have to make, but it may improve your position or effect.`
  },
  {
    name: `Shadow`,
    shortDesc: `You may expend your special armor to resist a consequence from detection or security measures, or to push yourself for a feat of athletics or stealth.`,
    details: `When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: `Rook’s gambit`,
    shortDesc: `Take 2 stress to roll your best action rating while performing a different action. Say how you adapt your skill to this use`,
    details: `This is the “jack-of-all-trades” ability. If you want to attempt lots of different sorts of actions and still have a good dice pool to roll, this is the special ability for you.`
  },
  {
    name: `Like looking into a mirror`,
    shortDesc: `You can always tell when someone is lying to you.`,
    details: `This ability works in all situations without restriction. It is very powerful, but also a bit of a curse. You see though every lie, even the kind ones.`
  },
  {
    name: `A little something on the side`,
    shortDesc: `At the end of each downtime phase, you earn +2 stash.`,
    details: `Since this money comes at the end of downtime, after all downtime actions are resolved, you can’t remove it from your stash and spend it on extra activities until your next downtime phase.`
  },
  {
    name: `Mesmerism`,
    shortDesc: `When you Sway someone, you may cause them to forget that it’s happened until they next interact with you.`,
    details: `The victim’s memory “glosses over” the missing time, so it’s not suspicious that they’ve forgotten something. When you next interact with the victim, they remember everything clearly, including the strange effect of this ability.`
  },
  {
    name: `Subterfuge`,
    shortDesc: `You may expend your special armor to resist a consequence from suspicion or persuasion, or to push yourself for subterfuge.`,
    details: `When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: `Trust in me`,
    shortDesc: `You get +1d vs. a target with whom you have an intimate relationship.`,
    details: `This ability isn’t just for social interactions. Any action can get the bonus. “Intimate” is for you and the group to define, it need not exclusively mean romantic intimacy.`
  },
  {
    name: `Foresight`,
    shortDesc: `Two times per score you can assist a teammate without paying stress. Describe how you prepared for this.`,
    details: `You can narrate an event in the past that helps your teammate now, or you might explain how you expected this situation and planned a helpful contingency that you reveal now.`
  },
  {
    name: `Calculating`,
    shortDesc: `Due to your careful planning, during downtime, you may give yourself or another crew member +1 downtime activity.`,
    details: `If you forget to use this ability during downtime, you can still activate it during the score and flashback to the previous downtime when the extra activity happened. `
  },
  {
    name: `Connected`,
    shortDesc: `During downtime, you get +1 result level when you acquire an asset or reduce heat.`,
    details: `Your array of underworld connections can be leveraged to loan assets, pressure a vendor to give you a better deal, intimidate witnesses, etc.`
  },
  {
    name: `Mastermind`,
    shortDesc: `You may expend your special armor to protect a teammate, or to push yourself when you gather information or work on a long-term project.`,
    details: `When you use this ability, tick the special armor box on your playbook sheet. If you protect a teammate, this ability negates or reduces the severity of a consequence or harm that your teammate is facing. You don’t have to be present to use this ability—say how you prepared for this situation in the past. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.`
  },
  {
    name: `Weaving the web`,
    shortDesc: `You gain +1d to Consort when you gather information on a target for a score. You get +1d to the engagement roll for that operation.`,
    details: `Your network of underworld connections can always be leveraged to gain insight for a job—even when your contacts aren’t aware that they’re helping you. `
  },
  {
    name: `Arcane mind`,
    shortDesc: `You’re always aware of supernatural entities in your presence. Take +1d whenever you gather information about the supernatural by any means.`,
    details: ``
  },
  {
    name: `Iron Will`,
    shortDesc: `You are immune to the terror that some supernatural entities inflict on sight. When you make a resistance roll with Resolve, take +1d.`,
    details: `With this ability, you do not freeze up or flee when confronted by any kind of supernatural entity or strange occult event.`
  },
  {
    name: `Ritual`,
    shortDesc: `You know the arcane methods to perform ritual sorcery. You can Study an occult ritual (or create a new one) to summon a supernatural effect or being. You begin with one ritual already learned. `,
    details: `Without this special ability, the study and practice of rituals leaves you utterly vulnerable to the powers you supplicate. Such endeavors are not recommended. `
  },
  {
    name: `Strange methods`,
    shortDesc: `When you invent or craft a creation with arcane features, get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one arcane design already known.`,
    details: `Follow the Inventing procedure with the GM to define your first arcane design.`
  },
  {
    name: `Warded`,
    shortDesc: `You may expend your special armor to resist a supernatural consequence, or to push yourself when you contend with or employ arcane forces.`,
    details: `When you use this ability, tick the special armor box on your playbook sheet. If you resist a consequence, this ability negates or reduces its severity. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime. `
  }
]

export default startingAbilities