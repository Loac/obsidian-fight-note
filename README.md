# Fight Note

This is a plugin for [Obsidian.md](https://obsidian.md/) that shows [Tekken notation](https://tekken.fandom.com/wiki/Move_Terminology) into an easy-to-read form.

## Installation

`Settings / Community plugins / Community Plugins / Browse` and search for `Fight Note`.

## Usage

In the editor, type out a code block with name `fight` as the language. Specify your notations on the subsequent lines.

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

Any combination of characters separated by spaces is considered notation. If you want to add a brief comment, enclose it in quotation marks.

	```fight
	df 2 > 2+3 > 2+3 "Default heat combo"
	```

![Custom notation](https://i.imgur.com/fC6LPbb.png)

The plugin has several options where you can change the size and color of the notations. Big notation with monochrome button colors:

![Big notation](https://i.imgur.com/HpDcN2l.png)

Small notation with Play Station button colors:

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

- Color: `red`, `blue`, `green`, `orange`, `purple`.
- Effect: `rotate-right`, `rotate-left`, `skew-right`, `skew-left`, `skew-up`, `skew-down`.
- Round: `round-top-left`, `round-top-right`, `round-bottom-left`, `round-bottom-right`, `round-all`.

#### Example

```
EFB:purple,skew-right:Electric Fall Back (Doctor Bosconovitch)
HMS:red,rotate-left:Hit Man Stance (Lee Chaolan)
PHX:green,rotate-right:Phoenix Illusion (Lei Wulong)
CAT:orange,rotate-right:Catastrophe (Anna)
```

![Custom](https://i.imgur.com/6qhycZq.png)

## Shortcuts

You can use few standard shortcuts. In settings can select render style – default, icon, expand:

![Shortcuts](https://i.imgur.com/hqM8sDG.png)

## Extend tooltips

Some notations contain additional information. To display it, you need to enable option in settings.

![Extend Tooltips](https://i.imgur.com/uhp9C6I.png)

## Inputs

### Actions 

- `1`: Left Punch. 
- `2`: Right Punch. 
- `3`: Left Kick. 
- `4`: Right Kick. 
- `12`, `1+2`: Left and Right Punch.
- `34`, `3+4`: Left and Right Kick. And other similar combinations.

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

### Shortcuts

- `qcb`, `QCB`: Quarter Circle Back.
- `qcf`, `QCF`: Quarter Circle Forward.
- `hcf`, `HCF`: Half Circle Forward.
- `hcb`, `HCB`: Half Circle Back.

### Specific

- `AOP`: Art of Phoenix (Xiaoyu)
- `BKP`: Backup (Alisa)
- `BOK`: Fo Bu (Leo)
- `BOOT`: Boot (Alisa)
- `CDS`: Crouching Demon Stance (Jin)
- `DBT`: Dual Boot (Alisa)
- `DCK`: Ducking (Steve)
- `DEN`: Dynamic Entry (Lars)
- `DES`: Destructive Form (Alisa)
- `DEW`: Dew Glide (Lili)
- `DGF`: Manji Dragonfly (Yoshimitsu)
- `DPD`: Deep Dive (Paul) 
- `DSS`: Dragon Sign Stance (Law)
- `EWGF`: Electric Wind God Fist (Kazuya, Reina, Devil Jin and Jin)
- `EXD`: Ducking In (Steve)
- `FLE`: Flea (Yoshimitsu)
- `FLK`: Flicker Stance (Steve)
- `FLY`: Fly (Devil Jin)
- `GEN`: Genjitsu (Jun)
- `GMH`: Gamma Howl (Jack-8)
- `HAZ`: Haze (Raven)
- `HMS`: Hit Man Stance (Lee)
- `HPF`: Whiplash Combo (Asuka / Jun)
- `HRM`: Hermit (Leroy)
- `HSP`: Bananeira (Eddy)
- `HYP`: Hypnotist (Xiaoyu)
- `IND`: Indian Stance (Yoshimitsu)
- `IZU`: Izumo (Jun)
- `JGR`: Jaguar Sprint/Jaguar Run (King)
- `JGS`: Jaguar Step (King)
- `KIN`: Kincho (Yoshimitsu)
- `KNK`: Jin Ji Du Li (Leo)
- `SSH`: Senshin (Reina)
- `UNS`: Unsoku (Reina)
- `WRA`: Heaven's Wrath (Reina)
- `KNP`: Kenpo step (Feng)
- `LCT`: Leg Cutter (Asuka / Jun)
- `LFF`: Left Foot Forward (Hwoarang)
- `LFS`: Left Flamingo Stance (Hwoarang)
- `LIB`: Libertador (Azucena)
- `LNH`: Lionheart (Steve)
- `LTG`: Lightning Glare (Leo)
- `LWV`: Ducking Left (Steve)
- `MCR`: Mourning Crow (Devil Jin)
- `MED`: Meditation (Yoshimitsu)
- `MIA`: Miare (Jun)
- `MNT`: Mantis Stance (Zafina)
- `NSS`: No Sword Stance (Yoshimitsu)
- `PDP`: Bad Stomach (Yoshimitsu)
- `PKB`: Peekaboo (Steve)
- `RDS`: Rain Dance (Xiaoyu)
- `RFF`: Right Foot Forward (Hwoarang)
- `RFS`: Right Flamingo Stance (Hwoarang)
- `RLX`: Negativa (Eddy)
- `RWV`: Ducking Right (Steve)
- `SCR`: Scarecrow Stance (Zafina)
- `SDW`: Shadow stance (Raven)
- `SEN`: Sentai (Reina)
- `SIT`: Sit Down (Jack-8)
- `SLS`: Slither Step (Bryan)
- `SNE`: Snake Eyes (Bryan)
- `SNK`: Sneak (Dragunov)
- `SSH`: Senshin (Reina)
- `STB`: Starburst (Claudio)
- `STC`: Shifting Clouds (Feng)
- `SWA`: Sway (Bryan)
- `SWY`: Sway Back (Steve)
- `TFS`: Fake Step (Law)
- `TRT`: Tarantula Stance (Zafina)
- `UNS`: Unsoku (Reina)
- `WDS`: Wind Step (Reina)
- `WGS`: Wind God Step (Reina)
- `WRA`: Heaven's Wrath (Reina)
- `ZEN`: Zenshin (Jin)

## Links about Tekken
 
- [Obsidian Tekken Notation](https://github.com/OpTi9/obsidian-tekken-notation) – Idea and inspiration.
- [Guide](https://wavu.wiki)
- [Notation](https://tekken.fandom.com/wiki/Move_Terminology) 
- [Combos](https://combotier.com/tekken8)
- [Cheatsheets](https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vTsgbCJNSTKajMNlJvQleJOl0eTiEcV-PbeU0obDg1lsSqmz0lTtcD2k6NzfTPt7Db9Ua2dz1o_34Sv/pubhtml?pli=1#)
- [Tier list](https://dashfight.com/tekken8/tekken-8-tier-list-41)
