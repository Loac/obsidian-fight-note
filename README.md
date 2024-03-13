# Fight notes

This is a plugin for [Obsidian.md](https://obsidian.md/) that shows [Tekken notation](https://tekken.fandom.com/wiki/Move_Terminology) into an easy-to-read form.

## Installation

`Settings / Community plugins / Community Plugins / Browse` and search for `Fight note`.

## Usage

In the editor, type out a code block with name `fight` as the language. 
Specify your notations on the subsequent lines.

### Examples

Full notation.

~~~markdown
```fight
input: b 3+4 > f 2 > df 1 1 > b 2 3 > uf 1
name: Alisa combo
damage: 74
hits: 8
```
~~~

![Full notation](https://i.imgur.com/PFgbQ82.png)

You don't have to specify anything except the notation.

~~~markdown
```fight
FC df 3 > DASH > f 2 3 2
```
~~~

![Short notation](https://i.imgur.com/frwILDO.png)

Any combination of characters separated by spaces is considered notation. If you want to add a brief comment, 
enclose it in quotation marks.

	```fight
	df 2 > 2+3 > 2+3 "Default heat combo"
	```

![Custom notation](https://i.imgur.com/fC6LPbb.png)

The plugin has several options where you can change the size and color of the notations. 
Big notation with monochrome button colors:

![Big notation](https://i.imgur.com/HpDcN2l.png)

Small notation with Play station button colors:

![Small notation](https://i.imgur.com/8LMe1TB.png)

## Abbreviations

Notations have different appearances depending on type.

### Common stances

![Common stances](https://i.imgur.com/pGadYaa.png)

### Special moves

![Special moves](https://i.imgur.com/TkT7qi4.png)

### Specific

![Specific](https://i.imgur.com/Ev9UkN3.png)

### Stage related

![Stage related](https://i.imgur.com/WoYFQhB.png)

### Custom

You can add or override existing notations in settings. Use several colors and effects:

- Colors: `red`, `blue`, `green`, `orange`, `purple`.
- Effects: `rotate-right`, `rotate-left`, `skew-right`, `skew-left`, `skew-up`, `skew-down`


#### Example

```
EFB:purple,skew-right:Electric Fall Back (Doctor Bosconovitch)
HMS:red,rotate-left:Hit Man Stance (Lee Chaolan)
PHX:green,rotate-right:Phoenix Illusion (Lei Wulong)
CAT:orange,rotate-right:Catastrophe (Anna)
```

![Custom](https://i.imgur.com/6qhycZq.png)

## Inputs

### Actions 

- `1`: Left Punch. 
- `2`: Right Punch. 
- `3`: Left Kick. 
- `4`: Right Kick. 
- `1+2`: Left and Right Punch. And other similar combinations.

### Moves

- `u`: Up.
- `f`: Forward.
- `d`: Down.
- `b`: Back.
- `uf`, `u/f`: Up Forward.
- `df`, `d/f`: Down Forward.
- `db`, `d/b`: Down Back.
- `ub`, `u/b`: Up Back.
- `n`: Neutral.
- `U`: Hold Up.
- `F`: Hold Forward.
- `D`: Hold Down.
- `B`: Hold Back.
- `UF`, `U/F`: Hold Up Forward.
- `DF`, `D/F`: Hold Down Forward.
- `UB`, `U/B`: Hold Up Back. 
- `DB`, `D/B`: Hold Down Back.

### Misc

- `>`, `,`: Next move.
- `[`, `]`: Brackets.

### Special moves

- `DASH`: Dash.
- `WR`: While Running.
- `SS`: Side Step.
- `SSL`: Side Step Left.
- `SSR`: Side Step Right.

### Common stance

- `WS`: While Standing.
- `iWS`: Instant While Standing.
- `BT`: Back Turned.
- `FC`: Full Crouch.
- `CC`: Crouch Cancel.
- `LP`: Low Parry.
- `CH`: Counter Hit.

### Stage related

- `W!`: Wall Splat.
- `WB!`: Wall Break.
- `F!`: Floor Break.
- `BB!`: Balcony Break.

### Specific

- `ALB`: Albatross spin (Steve Fox)
- `AOP`: Art of Phoenix (Ling Xiaoyu)
- `BKP`: Backup (Alisa)
- `BOOT`: Boot (Alisa Bosconovitch)
- `CDS`: Crouching Demon Stance (Jin Kazama)
- `DBT`: Dual Boot (Alisa)
- `DCK`: Ducking (Steve Fox)
- `DEN`: Dynamic Entry (Lars Alexandersson)
- `DES`: Destructive Form (Alisa Bosconovitch)
- `DGF`: Manji Dragonfly (Yoshimitsu)
- `DPD`: Deep Dive (Paul) 
- `DSS`: Dragon Sign Stance (Marshall Law)
- `EWGF`: Electric Wind God Fist (Kazuya, Reina, Devil Jin and Jin)
- `EXD`: Ducking In (Steve Fox)
- `FLE`: Flea (Yoshimitsu)
- `FLK`: Flicker Stance (Steve Fox)
- `FLY`: Fly (Devil Jin)
- `GEN`: Genjitsu (Jun)
- `GMH`: Gamma Howl (Jack-8)
- `HAZ`: Haze (Raven)
- `HMS`: Hit Man Stance (Lee Chaolan)
- `HPF`: Whiplash Combo (Asuka Kazama / Jun Kazama)
- `HYP`: Hypnotist (Xiaoyu)
- `IND`: Indian Stance (Yoshimitsu)
- `INS`: Indian Stance (Yoshimitsu)
- `IZU`: Izumo (Jun)
- `JGR`: Jaguar Sprint/Jaguar Run (King)
- `JGS`: Jaguar Step (King)
- `KIN`: Kincho (Yoshimitsu)
- `KNK`: Jin Ji Du Li (Leo Kliesen)
- `KNP`: Kenpo step (Feng Wei)
- `LCT`: Leg Cutter (Asuka Kazama / Jun Kazama)
- `LFF`: Left Foot Forward (Hwoarang)
- `LFS`: Left Flamingo Stance (Hwoarang)
- `LIB`: Libertador (Azucena)
- `LNH`: Lionheart (Steve Fox)
- `LWV`: Ducking Left (Steve Fox)
- `MCR`: Mourning Crow (Devil Jin)
- `MED`: Meditation (Yoshimitsu)
- `MIA`: Miare (Jun)
- `MNT`: Mantis Stance (Zafina)
- `NSS`: No Sword Stance (Yoshimitsu)
- `PAB`: Peekaboo (Steve Fox)
- `PDP`: Bad Stomach (Yoshimitsu)
- `PKB`: Peekaboo (Steve Fox)
- `RDS`: Rain Dance (Ling Xiaoyu)
- `RFF`: Right Foot Forward (Hwoarang)
- `RFS`: Right Flamingo Stance (Hwoarang)
- `RWV`: Ducking Right (Steve Fox)
- `SCR`: Scarecrow Stance (Zafina)
- `SDW`: Shadow stance (Raven)
- `SEN`: Sentai (Reina)
- `SIT`: Sit Down (Jack-8)
- `SLS`: Slither Step (Bryan)
- `SNE`: Snake Eyes (Bryan)
- `SNK`: Sneak (Dragunov)
- `SSH`: Senshin (Reina)
- `STB`: Starburst (Claudio Serafino)
- `STC`: Shifting Clouds (Feng Wei)
- `SWA`: Sway (Bryan)
- `SWY`: Sway Back (Steve Fox)
- `TFS`: Fake Step (Marshall Law)
- `TRT`: Tarantula Stance (Zafina)
- `UNS`: Unsoku (Reina)
- `WDS`: Wind Step (Reina)
- `WGS`: Wind God Step (Kazuya, Reina, Devil Jin and Jin)
- `WRA`: Heaven's Wrath (Reina)
- `ZEN`: Zenshin (Jin)

## Links about Tekken
 
- [Obsidian Tekken Notation](https://github.com/OpTi9/obsidian-tekken-notation) – Idea and inspiration.
- [Guide](https://wavu.wiki)
- [Notation](https://tekken.fandom.com/wiki/Move_Terminology) 
- [Combos](https://combotier.com/tekken8)
- [Cheatsheets](https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vTsgbCJNSTKajMNlJvQleJOl0eTiEcV-PbeU0obDg1lsSqmz0lTtcD2k6NzfTPt7Db9Ua2dz1o_34Sv/pubhtml?pli=1#)
- [Tier list](https://dashfight.com/tekken8/tekken-8-tier-list-41)
