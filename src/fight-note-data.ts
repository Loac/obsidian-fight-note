export const prefix: string = "fight-note__";

const action: string = `		
<svg class="fight-note__action fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__action-background" d="M723.9,400c-13.1-0.3-25.8,0.9-38,3.6C675,406,664,400.7,659,390.8c-0.1-0.1-0.1-0.2-0.2-0.4 c-5-9.9-2.8-22,5.6-29.2c34.3-29.5,55.9-73.3,55.6-122.1c-0.5-89.6-75.9-162-165.5-159C468.7,83,400,153.5,400,240 c0,11.7,1.3,23.1,3.6,34.1c2.4,10.9-2.9,21.9-12.9,26.9c-0.1,0.1-0.2,0.1-0.4,0.2c-9.9,5-22,2.8-29.2-5.6 c-29.5-34.3-73.3-55.9-122.1-55.6c-89.6,0.5-162,75.9-159,165.5C83,491.3,153.5,560,240,560c11.7,0,23.1-1.3,34.1-3.6 c10.9-2.4,21.9,2.9,26.9,12.9c0.1,0.1,0.1,0.2,0.2,0.4c5,9.9,2.8,22-5.6,29.2c-34.3,29.5-55.9,73.3-55.6,122.1 c0.5,89.6,75.9,162,165.5,159C491.3,877,560,806.5,560,720c0-11.7-1.3-23.1-3.6-34.1c-2.4-10.9,2.9-21.9,12.9-26.9 c0.2-0.1,0.3-0.2,0.5-0.2c9.8-4.9,21.8-2.8,29,5.5C628,698.4,671.5,720,720,720c88.6,0,160.4-72.1,160-160.8 C879.6,473,810,402.1,723.9,400z" />				
	<circle data-gradient="var(--action-color-4-light),var(--action-color-4-dark)" cx="720" cy="560" r="160" />
	<circle data-gradient="var(--action-color-4-dark),var(--action-color-4-light)" cx="720" cy="560" r="140" />
	<circle data-gradient="var(--action-color-3-light),var(--action-color-3-dark)" cx="400" cy="720" r="160" />
	<circle data-gradient="var(--action-color-3-dark),var(--action-color-3-light)" cx="400" cy="720" r="140" />
	<circle data-gradient="var(--action-color-2-light),var(--action-color-2-dark)" cx="560" cy="240" r="160" />
	<circle data-gradient="var(--action-color-2-dark),var(--action-color-2-light)" cx="560" cy="240" r="140" />
	<circle data-gradient="var(--action-color-1-light),var(--action-color-1-dark)" cx="240" cy="400" r="160" />
	<circle data-gradient="var(--action-color-1-dark),var(--action-color-1-light)" cx="240" cy="400" r="140" />
</svg>`;

const move: string = `
<svg class="fight-note__move fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">	
	<path class="fight-note__move-background" d="M242.2,504H301c6.6,0,12,5.4,12,12v276c0,26.5,21.5,48,48,48h240c26.5,0,48-21.5,48-48V516 c0-6.6,5.4-12,12-12h58.8c46.4,0,71.2-54.6,40.7-89.5L517.1,136.4c-19.1-21.8-53.2-21.8-72.2,0L201.6,414.5 C171,449.4,195.9,504,242.2,504z"/>
	<path class="fight-note__move-out" d="M242.2,504H301c6.6,0,12,5.4,12,12v276c0,26.5,21.5,48,48,48h240c26.5,0,48-21.5,48-48V516 c0-6.6,5.4-12,12-12h58.8c46.4,0,71.2-54.6,40.7-89.5L517.1,136.4c-19.1-21.8-53.2-21.8-72.2,0L201.6,414.5 C171,449.4,195.9,504,242.2,504z"/>
	<path class="fight-note__move-in" d="M472,178.3L246.4,436.1c-6.8,7.8-1.3,19.9,9,19.9H349c6.6,0,12,5.4,12,12v312c0,6.6,5.4,12,12,12h216 c6.6,0,12-5.4,12-12V468c0-6.6,5.4-12,12-12h93.6c10.3,0,15.8-12.1,9-19.9L490,178.3C485.2,172.8,476.8,172.8,472,178.3z"/>
</svg>`;

const neutral: string = `
<svg class="fight-note__neutral fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<path class="fight-note__neutral-background" d="M365.1,366.6H178.4c-46.9,0-66.2,60.1-28.2,87.5l150.5,108.1c4.3,3.1,6.1,8.6,4.4,13.6 l-57.3,174.6c-14.6,44.4,36.1,81.5,74,54.3L473,696c4.2-3,9.9-3,14.1,0l151.2,108.6c37.9,27.2,88.6-9.9,74-54.3l-57.3-174.6 c-1.6-5,0.1-10.5,4.4-13.6l150.5-108.1c38.1-27.4,18.7-87.5-28.2-87.5H594.9c-5.2,0-9.8-3.3-11.5-8.3l-57.6-175.1 c-14.6-44.2-77.1-44.2-91.7,0l-57.6,175.1C374.9,363.3,370.3,366.6,365.1,366.6z"/>
	<path class="fight-note__neutral-out" d="M365.1,366.6H178.4c-46.9,0-66.2,60.1-28.2,87.5l150.5,108.1c4.3,3.1,6.1,8.6,4.4,13.6l-57.3,174.6 c-14.6,44.4,36.1,81.5,74,54.3L473,696c4.2-3,9.9-3,14.1,0l151.2,108.6c37.9,27.2,88.6-9.9,74-54.3l-57.3-174.6 c-1.6-5,0.1-10.5,4.4-13.6l150.5-108.1c38.1-27.4,18.7-87.5-28.2-87.5H594.9c-5.2,0-9.8-3.3-11.5-8.3l-57.6-175.1 c-14.6-44.2-77.1-44.2-91.7,0l-57.6,175.1C374.9,363.3,370.3,366.6,365.1,366.6z"/>
	<path class="fight-note__neutral-in" d="M489.2,226.1l59.4,180.4c1.6,5,6.3,8.3,11.5,8.3h191.7c9.4,0,13.2,12,5.6,17.5L602.4,543.6 c-4.3,3.1-6.1,8.6-4.4,13.6l59.2,180.1c2.9,8.9-7.2,16.3-14.8,10.9L487,636.6c-4.2-3-9.9-3-14.1,0L317.6,748.1 c-7.6,5.4-17.7-2-14.8-10.9L362,557.1c1.6-5-0.1-10.5-4.4-13.6L202.7,432.4c-7.6-5.5-3.7-17.5,5.6-17.5H400c5.2,0,9.8-3.3,11.5-8.3 l59.4-180.4C473.7,217.3,486.3,217.3,489.2,226.1z"/>
</svg>`;

const next: string = `
<svg class="fight-note__next fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 640 960" xml:space="preserve">
	<path class="fight-note__next-background" d="M267.1,334.8l159.4,137.7c4.6,4,4.6,11,0,14.9L267.1,625.2c-6.6,5.7-17.1,1.2-17.1-7.5V342.3 C250,333.6,260.5,329.1,267.1,334.8z"/>
	<path class="fight-note__next-in" d="M267.1,334.8l159.4,137.7c4.6,4,4.6,11,0,14.9L267.1,625.2c-6.6,5.7-17.1,1.2-17.1-7.5V342.3 C250,333.6,260.5,329.1,267.1,334.8z"/>	
</svg>`;

const bracketLeft: string = `
<svg class="fight-note__bracket-left fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 640 960" xml:space="preserve">
	<path class="fight-note__bracket-left-background" d="M402.3,160c6.9,0,10.3,8.7,5.4,13.7C344.1,239.5,294.4,350.5,294.4,480s49.7,240.5,113.3,306.3 c4.9,5,1.5,13.7-5.4,13.7H237.7c-4.2,0-7.7-3.6-7.7-8V168c0-4.4,3.4-8,7.7-8H402.3z"/>
	<path class="fight-note__bracket-left-in" d="M402.3,160c6.9,0,10.3,8.7,5.4,13.7C344.1,239.5,294.4,350.5,294.4,480s49.7,240.5,113.3,306.3 c4.9,5,1.5,13.7-5.4,13.7H237.7c-4.2,0-7.7-3.6-7.7-8V168c0-4.4,3.4-8,7.7-8H402.3z"/>	
</svg>`;

const bracketRight: string = `
<svg class="fight-note__bracket-right fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 640 960" xml:space="preserve">
	<path class="fight-note__bracket-right-background" d="M402.3,160c4.2,0,7.7,3.6,7.7,8v624c0,4.4-3.4,8-7.7,8H237.7c-6.9,0-10.3-8.7-5.4-13.7 c63.6-65.8,113.3-176.8,113.3-306.3s-49.7-240.5-113.3-306.3c-4.9-5-1.5-13.7,5.4-13.7H402.3z"/>
	<path class="fight-note__bracket-right-in" d="M402.3,160c4.2,0,7.7,3.6,7.7,8v624c0,4.4-3.4,8-7.7,8H237.7c-6.9,0-10.3-8.7-5.4-13.7 c63.6-65.8,113.3-176.8,113.3-306.3s-49.7-240.5-113.3-306.3c-4.9-5-1.5-13.7,5.4-13.7H402.3z"/>	
</svg>`;

const iconWallSplat: string = `
<svg class="fight-note__icon-wall-splat fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<ellipse class="fight-note__icon-figure" transform="matrix(0.9841 -0.1778 0.1778 0.9841 -50.2681 112.0505)" cx="600.1" cy="336.5" rx="51" ry="51"/>
	<rect class="fight-note__icon-figure" x="180" y="400" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="200" y="505" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="230" y="452.6" width="130" height="15"/>
	<circle class="fight-note__icon-figure" cx="306" cy="224" r="16"/>
	<circle class="fight-note__icon-figure" cx="276" cy="686" r="16"/>
	<circle class="fight-note__icon-figure" cx="436" cy="174" r="16"/>
	<circle class="fight-note__icon-figure" cx="576" cy="774" r="16"/>
	<path class="fight-note__icon-figure" d="M780,450"/>
	<polygon class="fight-note__icon-figure" points="677.7,120 699.7,452.9 652.1,840 720,840 767.3,455.4 745.2,120 "/>
	<path class="fight-note__icon-figure" d="M607.8,418.5L579.4,406c-2-0.9-3.8-1.9-5.6-3.1c-17-11.4-96-63.5-121.8-81c-3.6-2.5-8.6-1.5-11.1,2.1 l-11.7,16.9c-2.5,3.6-1.6,8.6,2,11.1l108.6,74.7c5.3,3.6,7.3,10.4,5,16.4L517.9,512c-2.2,6.2-6.6,11.4-12.4,14.5l-152.8,81.9 c-3.7,2-5.1,6.6-3.1,10.4l10.8,20.2c2,3.7,6.6,5.1,10.4,3.1l150.4-80.5c2.8-1.5,6.3-1.1,8.7,1l21.9,20.1c3,2.8,3.5,7.4,1,10.7 L449.1,730.5c-2.7,3.5-2,8.5,1.6,11.2l17.3,13c3.5,2.7,8.5,2,11.2-1.6l108.8-143.9c3.8-5,6.7-10.5,8.8-16.4 c7.8-22.2,27.8-80.1,34.9-109.3C640.6,447.2,633.8,428.7,607.8,418.5z"/>
</svg>`;

const iconWallBreak: string = `
<svg class="fight-note__icon-wall-break fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<rect class="fight-note__icon-figure" x="680" y="120" width="80" height="130"/>
	<rect class="fight-note__icon-figure" x="680" y="710" width="80" height="130"/>
	<polygon class="fight-note__icon-figure" points="760.6,479.2 658.1,384.8 658.1,438.5 584.8,438.5 584.8,519.9 658.1,519.9 658.1,573.7 "/>
	<circle class="fight-note__icon-figure" cx="615" cy="165" r="16"/>
	<path class="fight-note__icon-figure" d="M537.6,449.8c2.8-27.9-3.2-41.4-21.8-45.3s-59.5-13.2-67.4-15 c-19.2-4.4-100.9-23.9-126.9-33.6c-3.5-1.3-7.3,0.5-8.6,4.1l-7.4,21.2c-1.2,3.5,0.6,7.2,4.1,8.5l132.8,35.9c0,0-15,86.6-22.1,102.1 c-6.4,13.8-113.2,73.8-143,94c-3,2.1-3.9,6.4-1.7,9.4l13.1,18.4c2.1,2.9,6.4,3.8,9.3,1.5l118.3-72c2.8-2.1,6.4-2.8,9.9-2.3 l24.7,10.6c4.7,0.8,6.3,7,2.3,9.8l-128.2,86.4c-3,2.1-3.8,6.4-1.5,9.3l13.2,18.4c2.1,3,6.4,3.8,9.3,1.5l146.8-96.7 c14.5-9,24.4-23.9,27.2-40.8C519.9,575.5,534.7,477.8,537.6,449.8z"/>
	<circle class="fight-note__icon-figure" cx="484.8" cy="325.8" r="49"/>
	<rect class="fight-note__icon-figure" x="149.4" y="420.1" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="149.4" y="524.9" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="149.4" y="472.5" width="130" height="15"/>
	<polygon class="fight-note__icon-figure" points="569.6,209.4 688.6,327.3 671.4,344.3 552.4,226.4 "/>
	<circle class="fight-note__icon-figure" cx="525.7" cy="182" r="16"/>
	<polygon class="fight-note__icon-figure" points="552.4,730.8 671.4,612.9 688.6,629.9 569.6,747.8 "/>
	<circle class="fight-note__icon-figure" cx="525.7" cy="775.2" r="16"/>
	<circle class="fight-note__icon-figure" cx="615" cy="790.4" r="16"/>
</svg>`;

const iconFloorBreak: string = `
<svg class="fight-note__icon-floor-break fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<rect class="fight-note__icon-figure" x="120" y="690" width="170" height="80"/>
	<polygon class="fight-note__icon-figure" points="530,720 530,660 430,660 430,720 390,720 480,810 570,720 "/>
	<rect class="fight-note__icon-figure" x="269.2" y="516.3" transform="matrix(0.7452 -0.6669 0.6669 0.7452 -326.5274 338.1232)" width="20" height="160"/>
	<circle class="fight-note__icon-figure" cx="175" cy="485" r="15"/>
	<rect class="fight-note__icon-figure" x="597.8" y="590.7" transform="matrix(0.7104 -0.7038 0.7038 0.7104 -226.4837 650.986)" width="160" height="20"/>
	<circle class="fight-note__icon-figure" cx="775" cy="505" r="15"/>
	<circle class="fight-note__icon-figure" cx="760" cy="630" r="20"/>
	<circle class="fight-note__icon-figure" cx="190" cy="630" r="20"/>
	<circle class="fight-note__icon-figure" cx="275" cy="475" r="15"/>
	<circle class="fight-note__icon-figure" cx="520" cy="242.1" r="50"/>
	<path class="fight-note__icon-figure" d="M642.1,261.5l-10.3,61.8c-0.5,3.1-3.3,5.3-6.5,5c-80.9-7.7-186.2-24.5-310.5-46.6c-4.4-0.8-8.6,2.2-9.3,6.6 c-0.8,4.7-1.8,10.6-2.6,15.3c-0.7,4.4,2.2,8.5,6.6,9.2l118.8,19.8c4,0.7,6.9,4.2,6.7,8.3c-2.7,50.3-27.8,218.2-39.5,274.1 c-0.9,4.4,2,8.8,6.5,9.5l24.8,4.1c4.4,0.7,8.5-2.2,9.2-6.6l19.4-116.2c0.7-4.2,4.6-7.2,8.9-6.6l24.4,3.1c4.2,0.5,7.3,4.3,7,8.5 l-8.8,117c-0.3,4.4,3,8.2,7.4,8.6l25,1.9c4.4,0.3,8.5-3,8.6-7.4c1.2-73.2,13.7-207.5,27.4-271.7c0.9-4.3,4.6-7.5,8.9-6.9l84.2,10.7 c4.3,0.5,8.2-2.4,8.9-6.6c3.2-19.3,11.6-70,14.9-89.9c0.7-4.3-2.2-8.4-6.6-9.2l-14.3-2.4C646.9,254.2,642.8,257.2,642.1,261.5z"/>
	<rect class="fight-note__icon-figure" x="670" y="690" width="170" height="80"/>
</svg>`;

const iconBalconyBreak: string = `
<svg class="fight-note__icon-balcony-break fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<circle class="fight-note__icon-figure" cx="657.1" cy="432.9" r="57.1"/>
	<path class="fight-note__icon-figure" d="M816.5,485.9l-10.4-21.6c-1.9-4-6.7-5.7-10.7-3.7l-103.3,49.6c-24,11.5-52.2,9.6-74.4-5.1l-22.6-15 c-4.4-2.9-7.6-7.2-9.2-12.2l-45.4-140.3c-1.4-4.2-5.9-6.5-10.1-5.1l-22.8,7.4c-4.2,1.4-6.5,5.9-5.1,10.1l51.2,158 c2.4,7.4,1.6,15.5-2.3,22.2L516.6,591c-3.4,6-8.9,10.5-15.5,12.6l-172.7,55.9c-4.2,1.4-6.5,5.9-5.1,10.1l7.4,22.8 c1.4,4.2,5.9,6.5,10.1,5.1l169.9-55c3.2-1,6.7,0,8.8,2.7l19.3,25.1c3.1,4,1.7,9.9-2.9,12.1l-168.7,81c-4,1.9-5.7,6.7-3.7,10.7 l10.4,21.6c1.9,4,6.7,5.7,10.7,3.7L556.3,717c8.9-4.3,16.3-11,21.5-19.3l73.6-119.4c2.3-3.8,5.7-6.9,9.8-8.8l151.7-72.9 C816.8,494.7,818.4,489.9,816.5,485.9z"/>
	<rect class="fight-note__icon-figure" x="431.2" y="296.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -126.9507 416.0445)" width="15" height="130"/>
	<rect class="fight-note__icon-figure" x="357.1" y="370.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -201.0555 385.3492)" width="15" height="130"/>
	<rect class="fight-note__icon-figure" x="394.2" y="333.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -164.0031 400.6969)" width="15" height="130"/>
	<rect class="fight-note__icon-figure" x="233.5" y="147.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.8097 240.9619)" width="15" height="187.4"/>
	<circle class="fight-note__icon-figure" cx="356" cy="266" r="16"/>
	<circle class="fight-note__icon-figure" cx="354" cy="196" r="16"/>
	<circle class="fight-note__icon-figure" cx="456" cy="226" r="16"/>
	<circle class="fight-note__icon-figure" cx="296" cy="526" r="16"/>
	<path class="fight-note__icon-figure" d="M161,320v20h-41v30h41v463c9.4,4.5,19.9,7,31,7h49V320H161z"/>
</svg>`;

const iconHeat: string = `
<svg class="fight-note__icon-heat fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-figure" d="M773.6,504.1c0-90.4-30.6-210.4-103-267.3c46.5,94.2,45.8,82.2-65,14.3c-33.1-20.2-67.8-41.1-132.9-61.2 c65,43,80.6,57.1,76.8,70.5c-91.7-35.3-198.7-63.9-279.3-58.1c200.1,105.2,80.5,119.9-101.8,56.1c102.8,58.6,89.5,69.1,9.1,68.2 C454.2,468.4,351.3,460,186,393.9c210.5,182,175.9,221.7,38.6,308.2c181.9-3.8,156.5,39.3-28.2,66.3c117.1,0,331.6,1.5,434.1,1.5 c83.3,0,86.4-85.2,86.6-25.3C730.4,732.7,773.6,594.5,773.6,504.1z M521.2,337.8c28.6-1.9,52.3,20.7,52.3,48.8 c0,27.1-22,48.9-48.9,48.9c-28.4,0-51.1-24.2-48.7-53C477.8,358.6,497.2,339.4,521.2,337.8z M396.9,737.6 c-7.6-7-16.5-25.2-18.9-34.7c-0.3-1.2,0.2-2.6,1.3-3.2c8.1-5.1,43.6-15.4,56.9-48.6c1.2-2.9,4.2-4.6,7.3-4 c14.2,2.5,39.4,16.4,39.4,21.5c-15.4,39.3-70.6,65.7-83.2,69.6C398.8,738.5,397.7,738.3,396.9,737.6z M674.1,440.5 c-4.7,11.6-22.5,42.6-34.1,53.6c-0.8,0.8-1.7,1.4-2.6,2c-16,9.3-43.3,17.9-68.3,22.6c-7.1,1.3-12.3,7.3-12.7,14.4 c-0.9,18.8-3.1,49.7-3.8,70.2c-0.2,6.3,3.4,12.1,9.1,14.6c42.5,18.4,75.3,66.2,82.9,105.4c0.9,4.9-2.9,9.4-7.9,9.4h-33 c-3.7,0-6.9-2.5-7.8-6.1c-5.8-25.1-34.3-60.2-144-95.1c-16.7-5.3-27.6-21.5-26.3-39c3.2-41.3,14.7-107.7,27.7-120.5 c16.8-16.6,144.7,0.1,156.6-8.6c10.4-7.7,26.7-33.4,36.6-41.9c2.2-1.9,5.3-2.4,8-1.3c5.8,2.2,14.1,7.4,18.2,12.4 C674.7,434.7,675.1,437.8,674.1,440.5z"/>
</svg>`;

export const svgData: { [key: string]: string } = {
	"action": action,
	"move": move,
	"neutral": neutral,
	"next": next,
	"bracket-left": bracketLeft,
	"bracket-right": bracketRight,
	"icon-wall-splat": iconWallSplat,
	"icon-wall-break": iconWallBreak,
	"icon-floor-break": iconFloorBreak,
	"icon-balcony-break": iconBalconyBreak,
	"icon-heat": iconHeat,
}

export const alias: { [key: string]: string } = {
	"u/f": "uf",
	"df": "d/f",
	"db": "d/b",
	"ub": "u/b",
	"U/F": "UF",
	"DF": "D/F",
	"DB": "D/B",
	"UB": "U/B",
	"12": "1+2",
	"123": "1+2+3",
	"1234": "1+2+3+4",
	"124": "1+2+4",
	"13": "1+3",
	"14": "1+4",
	"23": "2+3",
	"24": "2+4",
	"34": "3+4",
	",": ">",
}

export const notation: { [key: string]: Notation } = {

	// Actions.

	"1": {
		input: "1",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1"],
	},
	"2": {
		input: "2",
		svg: "action",
		cls: [prefix + "input", prefix + "input-2"],
	},
	"3": {
		input: "3",
		svg: "action",
		cls: [prefix + "input", prefix + "input-3"],
	},
	"4": {
		input: "4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-4"],
	},
	"1+2": {
		input: "1+2",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2"],
	},
	"1+2+3": {
		input: "1+2+3",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-3"],
	},
	"1+2+3+4": {
		input: "1+2+3+4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-3", prefix + "input-4"],
	},
	"1+2+4": {
		input: "1+2+4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-4"],
	},
	"1+3": {
		input: "1+3",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-3"],
	},
	"1+4": {
		input: "1+4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-4"],
	},
	"2+3": {
		input: "2+3",
		svg: "action",
		cls: [prefix + "input", prefix + "input-2", prefix + "input-3"],
	},
	"2+4": {
		input: "2+4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-2", prefix + "input-4"],
	},
	"3+4": {
		input: "3+4",
		svg: "action",
		cls: [prefix + "input", prefix + "input-3", prefix + "input-4"],
	},

	// Movements.

	"u": {
		input: "u",
		svg: "move",
		cls: [prefix + "input", prefix + "input-u", prefix + "input-move-tap"],
	},
	"uf": {
		input: "uf",
		svg: "move",
		cls: [prefix + "input", prefix + "input-uf", prefix + "input-move-tap"],
	},
	"f": {
		input: "f",
		svg: "move",
		cls: [prefix + "input", prefix + "input-f", prefix + "input-move-tap"],
	},
	"df": {
		input: "df",
		svg: "move",
		cls: [prefix + "input", prefix + "input-df", prefix + "input-move-tap"],
	},
	"d": {
		input: "d",
		svg: "move",
		cls: [prefix + "input", prefix + "input-d", prefix + "input-move-tap"],
	},
	"db": {
		input: "db",
		svg: "move",
		cls: [prefix + "input", prefix + "input-db", prefix + "input-move-tap"],
	},
	"b": {
		input: "b",
		svg: "move",
		cls: [prefix + "input", prefix + "input-b", prefix + "input-move-tap"],
	},
	"ub": {
		input: "ub",
		svg: "move",
		cls: [prefix + "input", prefix + "input-ub", prefix + "input-move-tap"],
	},
	"U": {
		input: "U",
		svg: "move",
		cls: [prefix + "input", prefix + "input-U", prefix + "input-move-hold"],
	},
	"UF": {
		input: "UF",
		svg: "move",
		cls: [prefix + "input", prefix + "input-UF", prefix + "input-move-hold"],
	},
	"F": {
		input: "F",
		svg: "move",
		cls: [prefix + "input", prefix + "input-F", prefix + "input-move-hold"],
	},
	"DF": {
		input: "DF",
		svg: "move",
		cls: [prefix + "input", prefix + "input-DF", prefix + "input-move-hold"],
	},
	"D": {
		input: "D",
		svg: "move",
		cls: [prefix + "input", prefix + "input-D", prefix + "input-move-hold"],
	},
	"DB": {
		input: "DB",
		svg: "move",
		cls: [prefix + "input", prefix + "input-DB", prefix + "input-move-hold"],
	},
	"B": {
		input: "B",
		svg: "move",
		cls: [prefix + "input", prefix + "input-B", prefix + "input-move-hold"],
	},
	"UB": {
		input: "UB",
		svg: "move",
		cls: [prefix + "input", prefix + "input-UB", prefix + "input-move-hold"],
	},
	"n": {
		input: "n",
		svg: "neutral",
		cls: [prefix + "input", prefix + "input-neutral"],
	},

	// Misc.

	">": {
		input: ">",
		svg: "next",
		cls: [prefix + "input", prefix + "input-next"],
	},
	"[": {
		input: "[",
		svg: "bracket-left",
		cls: [prefix + "input", prefix + "input-bracket-left"],
	},
	"]": {
		input: "]",
		svg: "bracket-right",
		cls: [prefix + "input", prefix + "input-bracket-right"],
	},

	// Stage related.

	"W!": {
		input: "W!",
		svg: "icon-wall-splat",
		cls: [prefix + "input", prefix + "input-wall-splat", prefix + "input-stage-related"],
		tooltip: "Wall Splat",
	},
	"WB!": {
		input: "WB!",
		svg: "icon-wall-break",
		cls: [prefix + "input", prefix + "input-wall-break", prefix + "input-stage-related"],
		tooltip: "Wall Break",
	},
	"F!": {
		input: "F!",
		svg: "icon-floor-break",
		cls: [prefix + "input", prefix + "input-floor-break", prefix + "input-stage-related"],
		tooltip: "Floor Break",
	},
	"BB!": {
		input: "BB!",
		svg: "icon-balcony-break",
		cls: [prefix + "input", prefix + "input-balcony-break", prefix + "input-stage-related"],
		tooltip: "Balcony Break",
	},

	// Icons.

	"HEAT": {
		input: "HEAT",
		svg: "icon-heat",
		cls: [prefix + "input", prefix + "input-heat", prefix + "input-stage-related"],
		tooltip: "Heat",
	},

	// Common stances.

	"WS": {
		input: "WS",
		svg: "",
		cls: [prefix + "input", prefix + "input-WS", prefix + "input-common-stance"],
		tooltip: "While Standing",
	},
	"iWS": {
		input: "iWS",
		svg: "",
		cls: [prefix + "input", prefix + "input-iWS", prefix + "input-common-stance"],
		tooltip: "Instant While Standing",
	},
	"BT": {
		input: "BT",
		svg: "",
		cls: [prefix + "input", prefix + "input-BT", prefix + "input-common-stance"],
		tooltip: "Back Turned",
	},
	"FC": {
		input: "FC",
		svg: "",
		cls: [prefix + "input", prefix + "input-FC", prefix + "input-common-stance"],
		tooltip: "Full Crouch",
	},
	"CC": {
		input: "CC",
		svg: "",
		cls: [prefix + "input", prefix + "input-CC", prefix + "input-common-stance"],
		tooltip: "Crouch Cancel",
	},
	"LP": {
		input: "LP",
		svg: "",
		cls: [prefix + "input", prefix + "input-LP", prefix + "input-common-stance"],
		tooltip: "Low Parry",
	},
	"CH": {
		input: "CH",
		svg: "",
		cls: [prefix + "input", prefix + "input-CH", prefix + "input-common-stance"],
		tooltip: "Counter Hit",
	},

	// Special moves.

	"DASH": {
		input: "DASH",
		svg: "",
		cls: [prefix + "input", prefix + "input-DASH", prefix + "input-special-move"],
		tooltip: "Dash",
	},
	"WR": {
		input: "WR",
		svg: "",
		cls: [prefix + "input", prefix + "input-WR", prefix + "input-special-move"],
		tooltip: "While Running",
	},
	"SS": {
		input: "SS",
		svg: "",
		cls: [prefix + "input", prefix + "input-SS", prefix + "input-special-move"],
		tooltip: "Side Step",
	},
	"SSL": {
		input: "SSL",
		svg: "",
		cls: [prefix + "input", prefix + "input-SSL", prefix + "input-special-move"],
		tooltip: "Side Step Left",
	},
	"SSR": {
		input: "SSR",
		svg: "",
		cls: [prefix + "input", prefix + "input-SSR", prefix + "input-special-move"],
		tooltip: "Side Step Right",
	},

	// Specific.

	"ALB": {
		input: "ALB",
		svg: "",
		cls: [prefix + "input", prefix + "input-ALB", prefix + "input-specific-action"],
		tooltip: "Albatross spin (Steve Fox)",
	},
	"AOP": {
		input: "AOP",
		svg: "",
		cls: [prefix + "input", prefix + "input-AOP", prefix + "input-specific-action"],
		tooltip: "Art of Phoenix (Ling Xiaoyu)",
	},
	"BKP": {
		input: "BKP",
		svg: "",
		cls: [prefix + "input", prefix + "input-BKP", prefix + "input-specific-action"],
		tooltip: "Backup (Alisa)",
	},
	"BOOT": {
		input: "BOOT",
		svg: "",
		cls: [prefix + "input", prefix + "input-BOOT", prefix + "input-specific-action"],
		tooltip: "Boot (Alisa Bosconovitch)",
	},
	"CDS": {
		input: "CDS",
		svg: "",
		cls: [prefix + "input", prefix + "input-CDS", prefix + "input-specific-action"],
		tooltip: "Crouching Demon Stance (Jin Kazama)",
	},
	"DBT": {
		input: "DBT",
		svg: "",
		cls: [prefix + "input", prefix + "input-DBT", prefix + "input-specific-action"],
		tooltip: "Dual Boot (Alisa)",
	},
	"DCK": {
		input: "DCK",
		svg: "",
		cls: [prefix + "input", prefix + "input-DCK", prefix + "input-specific-action"],
		tooltip: "Ducking (Steve Fox)",
	},
	"DEN": {
		input: "DEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-DEN", prefix + "input-specific-action"],
		tooltip: "Dynamic Entry (Lars Alexandersson)",
	},
	"DES": {
		input: "DES",
		svg: "",
		cls: [prefix + "input", prefix + "input-DES", prefix + "input-specific-action"],
		tooltip: "Destructive Form (Alisa Bosconovitch)",
	},
	"DGF": {
		input: "DGF",
		svg: "",
		cls: [prefix + "input", prefix + "input-DGF", prefix + "input-specific-action"],
		tooltip: "Manji Dragonfly (Yoshimitsu)",
	},
	"DPD": {
		input: "DPD",
		svg: "",
		cls: [prefix + "input", prefix + "input-DPD", prefix + "input-specific-action"],
		tooltip: "Deep Dive (Paul) ",
	},
	"DSS": {
		input: "DSS",
		svg: "",
		cls: [prefix + "input", prefix + "input-DSS", prefix + "input-specific-action"],
		tooltip: "Dragon Sign Stance (Marshall Law)",
	},
	"EWGF": {
		input: "EWGF",
		svg: "",
		cls: [prefix + "input", prefix + "input-EWGF", prefix + "input-specific-action"],
		tooltip: "Electric Wind God Fist (Kazuya, Reina, Devil Jin and Jin)",
	},
	"EXD": {
		input: "EXD",
		svg: "",
		cls: [prefix + "input", prefix + "input-EXD", prefix + "input-specific-action"],
		tooltip: "Ducking In (Steve Fox)",
	},
	"FLE": {
		input: "FLE",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLE", prefix + "input-specific-action"],
		tooltip: "Flea (Yoshimitsu)",
	},
	"FLK": {
		input: "FLK",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLK", prefix + "input-specific-action"],
		tooltip: "Flicker Stance (Steve Fox)",
	},
	"FLY": {
		input: "FLY",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLY", prefix + "input-specific-action"],
		tooltip: "Fly (Devil Jin)",
	},
	"GEN": {
		input: "GEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-GEN", prefix + "input-specific-action"],
		tooltip: "Genjitsu (Jun)",
	},
	"GMH": {
		input: "GMH",
		svg: "",
		cls: [prefix + "input", prefix + "input-GMH", prefix + "input-specific-action"],
		tooltip: "Gamma Howl (Jack-8)",
	},
	"HAZ": {
		input: "HAZ",
		svg: "",
		cls: [prefix + "input", prefix + "input-HAZ", prefix + "input-specific-action"],
		tooltip: "Haze (Raven)",
	},
	"HMS": {
		input: "HMS",
		svg: "",
		cls: [prefix + "input", prefix + "input-HMS", prefix + "input-specific-action"],
		tooltip: "Hit Man Stance (Lee Chaolan)",
	},
	"HPF": {
		input: "HPF",
		svg: "",
		cls: [prefix + "input", prefix + "input-HPF", prefix + "input-specific-action"],
		tooltip: "Whiplash Combo (Asuka Kazama / Jun Kazama)",
	},
	"HYP": {
		input: "HYP",
		svg: "",
		cls: [prefix + "input", prefix + "input-HYP", prefix + "input-specific-action"],
		tooltip: "Hypnotist (Xiaoyu)",
	},
	"IND": {
		input: "IND",
		svg: "",
		cls: [prefix + "input", prefix + "input-IND", prefix + "input-specific-action"],
		tooltip: "Indian Stance (Yoshimitsu)",
	},
	"INS": {
		input: "INS",
		svg: "",
		cls: [prefix + "input", prefix + "input-INS", prefix + "input-specific-action"],
		tooltip: "Indian Stance (Yoshimitsu)",
	},
	"IZU": {
		input: "IZU",
		svg: "",
		cls: [prefix + "input", prefix + "input-IZU", prefix + "input-specific-action"],
		tooltip: "Izumo (Jun)",
	},
	"JGR": {
		input: "JGR",
		svg: "",
		cls: [prefix + "input", prefix + "input-JGR", prefix + "input-specific-action"],
		tooltip: "Jaguar Sprint/Jaguar Run (King)",
	},
	"JGS": {
		input: "JGS",
		svg: "",
		cls: [prefix + "input", prefix + "input-JGS", prefix + "input-specific-action"],
		tooltip: "Jaguar Step (King)",
	},
	"KIN": {
		input: "KIN",
		svg: "",
		cls: [prefix + "input", prefix + "input-KIN", prefix + "input-specific-action"],
		tooltip: "Kincho (Yoshimitsu)",
	},
	"KNK": {
		input: "KNK",
		svg: "",
		cls: [prefix + "input", prefix + "input-KNK", prefix + "input-specific-action"],
		tooltip: "Jin Ji Du Li (Leo Kliesen)",
	},
	"KNP": {
		input: "KNP",
		svg: "",
		cls: [prefix + "input", prefix + "input-KNP", prefix + "input-specific-action"],
		tooltip: "Kenpo step (Feng Wei)",
	},
	"LCT": {
		input: "LCT",
		svg: "",
		cls: [prefix + "input", prefix + "input-LCT", prefix + "input-specific-action"],
		tooltip: "Leg Cutter (Asuka Kazama / Jun Kazama)",
	},
	"LFF": {
		input: "LFF",
		svg: "",
		cls: [prefix + "input", prefix + "input-LFF", prefix + "input-specific-action"],
		tooltip: "Left Foot Forward (Hwoarang)",
	},
	"LFS": {
		input: "LFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-LFS", prefix + "input-specific-action"],
		tooltip: "Left Flamingo Stance (Hwoarang)",
	},
	"LIB": {
		input: "LIB",
		svg: "",
		cls: [prefix + "input", prefix + "input-LIB", prefix + "input-specific-action"],
		tooltip: "Libertador (Azucena)",
	},
	"LNH": {
		input: "LNH",
		svg: "",
		cls: [prefix + "input", prefix + "input-LNH", prefix + "input-specific-action"],
		tooltip: "Lionheart (Steve Fox)",
	},
	"LWV": {
		input: "LWV",
		svg: "",
		cls: [prefix + "input", prefix + "input-LWV", prefix + "input-specific-action"],
		tooltip: "Ducking Left (Steve Fox)",
	},
	"MCR": {
		input: "MCR",
		svg: "",
		cls: [prefix + "input", prefix + "input-MCR", prefix + "input-specific-action"],
		tooltip: "Mourning Crow (Devil Jin)",
	},
	"MED": {
		input: "MED",
		svg: "",
		cls: [prefix + "input", prefix + "input-MED", prefix + "input-specific-action"],
		tooltip: "Meditation (Yoshimitsu)",
	},
	"MIA": {
		input: "MIA",
		svg: "",
		cls: [prefix + "input", prefix + "input-MIA", prefix + "input-specific-action"],
		tooltip: "Miare (Jun)",
	},
	"MNT": {
		input: "MNT",
		svg: "",
		cls: [prefix + "input", prefix + "input-MNT", prefix + "input-specific-action"],
		tooltip: "Mantis Stance (Zafina)",
	},
	"NSS": {
		input: "NSS",
		svg: "",
		cls: [prefix + "input", prefix + "input-NSS", prefix + "input-specific-action"],
		tooltip: "No Sword Stance (Yoshimitsu)",
	},
	"PAB": {
		input: "PAB",
		svg: "",
		cls: [prefix + "input", prefix + "input-PAB", prefix + "input-specific-action"],
		tooltip: "Peekaboo (Steve Fox)",
	},
	"PDP": {
		input: "PDP",
		svg: "",
		cls: [prefix + "input", prefix + "input-PDP", prefix + "input-specific-action"],
		tooltip: "Bad Stomach (Yoshimitsu)",
	},
	"PKB": {
		input: "PKB",
		svg: "",
		cls: [prefix + "input", prefix + "input-PKB", prefix + "input-specific-action"],
		tooltip: "Peekaboo (Steve Fox)",
	},
	"RDS": {
		input: "RDS",
		svg: "",
		cls: [prefix + "input", prefix + "input-RDS", prefix + "input-specific-action"],
		tooltip: "Rain Dance (Ling Xiaoyu)",
	},
	"RFF": {
		input: "RFF",
		svg: "",
		cls: [prefix + "input", prefix + "input-RFF", prefix + "input-specific-action"],
		tooltip: "Right Foot Forward (Hwoarang)",
	},
	"RFS": {
		input: "RFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-RFS", prefix + "input-specific-action"],
		tooltip: "Right Flamingo Stance (Hwoarang)",
	},
	"RWV": {
		input: "RWV",
		svg: "",
		cls: [prefix + "input", prefix + "input-RWV", prefix + "input-specific-action"],
		tooltip: "Ducking Right (Steve Fox)",
	},
	"SCR": {
		input: "SCR",
		svg: "",
		cls: [prefix + "input", prefix + "input-SCR", prefix + "input-specific-action"],
		tooltip: "Scarecrow Stance (Zafina)",
	},
	"SDW": {
		input: "SDW",
		svg: "",
		cls: [prefix + "input", prefix + "input-SDW", prefix + "input-specific-action"],
		tooltip: "Shadow stance (Raven)",
	},
	"SEN": {
		input: "SEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-SEN", prefix + "input-specific-action"],
		tooltip: "Sentai (Reina)",
	},
	"SIT": {
		input: "SIT",
		svg: "",
		cls: [prefix + "input", prefix + "input-SIT", prefix + "input-specific-action"],
		tooltip: "Sit Down (Jack-8)",
	},
	"SLS": {
		input: "SLS",
		svg: "",
		cls: [prefix + "input", prefix + "input-SLS", prefix + "input-specific-action"],
		tooltip: "Slither Step (Bryan)",
	},
	"SNE": {
		input: "SNE",
		svg: "",
		cls: [prefix + "input", prefix + "input-SNE", prefix + "input-specific-action"],
		tooltip: "Snake Eyes (Bryan)",
	},
	"SNK": {
		input: "SNK",
		svg: "",
		cls: [prefix + "input", prefix + "input-SNK", prefix + "input-specific-action"],
		tooltip: "Sneak (Dragunov)",
	},
	"STB": {
		input: "STB",
		svg: "",
		cls: [prefix + "input", prefix + "input-STB", prefix + "input-specific-action"],
		tooltip: "Starburst (Claudio Serafino)",
	},
	"STC": {
		input: "STC",
		svg: "",
		cls: [prefix + "input", prefix + "input-STC", prefix + "input-specific-action"],
		tooltip: "Shifting Clouds (Feng Wei)",
	},
	"SWA": {
		input: "SWA",
		svg: "",
		cls: [prefix + "input", prefix + "input-SWA", prefix + "input-specific-action"],
		tooltip: "Sway (Bryan)",
	},
	"SWY": {
		input: "SWY",
		svg: "",
		cls: [prefix + "input", prefix + "input-SWY", prefix + "input-specific-action"],
		tooltip: "Sway Back (Steve Fox)",
	},
	"TFS": {
		input: "TFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-TFS", prefix + "input-specific-action"],
		tooltip: "Fake Step (Marshall Law)",
	},
	"TRT": {
		input: "TRT",
		svg: "",
		cls: [prefix + "input", prefix + "input-TRT", prefix + "input-specific-action"],
		tooltip: "Tarantula Stance (Zafina)",
	},
	"WGS": {
		input: "WGS",
		svg: "",
		cls: [prefix + "input", prefix + "input-WGS", prefix + "input-specific-action"],
		tooltip: "Wind God Step (Kazuya, Reina, Devil Jin and Jin)",
	},
	"ZEN": {
		input: "ZEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-ZEN", prefix + "input-specific-action"],
		tooltip: "Zenshin (Jin)",
	},

}

export class Notation {
	input: string;
	svg: string;
	cls: string[];
	tooltip?: string;

	constructor(input: string, cls: string[], tooltip: string) {
		this.input = input;
		this.cls = cls;
		this.tooltip = tooltip;
	}
}
