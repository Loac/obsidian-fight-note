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
	<path class="fight-note__move-background" d="M387.3,840c-36.6,0-66.4-29.6-66.4-66V524.9c0-5.5-4.5-10-10-10h-54.5 c-26.2,0-49.3-14.7-60.3-38.3c-10.9-23.5-7.3-50.4,9.5-70.2l223.5-263c12.6-14.9,31.1-23.4,50.7-23.4c19.6,0,38.1,8.5,50.7,23.4 l223.5,263c16.8,19.8,20.5,46.7,9.5,70.2c-11,23.6-34.1,38.3-60.3,38.3H649c-5.5,0-10,4.5-10,10V774c0,36.4-29.8,66-66.4,66H387.3z"/>
	<path class="fight-note__move-out" d="M387.3,840c-36.6,0-66.4-29.6-66.4-66V524.9 c0-5.5-4.5-10-10-10h-54.5c-26.2,0-49.3-14.7-60.3-38.3c-10.9-23.5-7.3-50.4,9.5-70.2l223.5-263c12.6-14.9,31.1-23.4,50.7-23.4 c19.6,0,38.1,8.5,50.7,23.4l223.5,263c16.8,19.8,20.5,46.7,9.5,70.2c-11,23.6-34.1,38.3-60.3,38.3H649c-5.5,0-10,4.5-10,10V774 c0,36.4-29.8,66-66.4,66H387.3z"/>
	<path class="fight-note__move-in" d="M368.7,489.5V770c0,11.1,9.1,20,20.2,20h182.2c11.2,0,20.2-9,20.2-20V489.5c0-11.1,9.1-20,20.2-20h88.2 c17.2,0,26.6-19.9,15.5-32.9L495.5,177.2c-8.1-9.5-22.9-9.5-31,0L244.8,436.5c-11,13-1.7,32.9,15.5,32.9h88.2 C359.6,469.4,368.7,478.4,368.7,489.5z"/>
</svg>`;

const quarterCircle: string = `
<svg class="fight-note__move fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<path class="fight-note__move-background" d="M372.7,820c-17,0-33.2-7.5-44.3-20.4L153.8,593.3c-14.7-17.3-18-40.9-8.5-61.5 c9.4-20.5,30.1-33.7,52.7-33.7h25.8c10.2,0,18.6-8.3,18.6-18.5l0.1-26.6c0.3-56.4,22.5-110.7,62.6-150.3 c39.2-38.6,91-59.9,146.1-60.2l28.3-0.1c10.2,0,18.5-8.4,18.5-18.6V198c0-32,26-58,57.9-58c13.6,0,26.7,4.8,37.3,13.7l206.3,174.8 c12.9,11.1,20.4,27.2,20.4,44.3c0,17-7.5,33.2-20.4,44.3L694.4,506l11.4,137.3c1.3,16.1-4.3,32.1-15.3,44 c-11,11.9-26.6,18.7-42.7,18.7c-1.5,0-141.9-11.6-141.9-11.6l-89.1,105.2C405.9,812.5,389.8,820,372.7,820z"/>
	<path class="fight-note__move-out" d="M372.7,820c-17,0-33.2-7.5-44.3-20.4L153.8,593.3c-14.7-17.3-18-40.9-8.5-61.5 c9.4-20.5,30.1-33.7,52.7-33.7h25.8c10.2,0,18.6-8.3,18.6-18.5l0.1-26.6c0.3-56.4,22.5-110.7,62.6-150.3 c39.2-38.6,91-59.9,146.1-60.2l28.3-0.1c10.2,0,18.5-8.4,18.5-18.6V198c0-32,26-58,57.9-58c13.6,0,26.7,4.8,37.3,13.7l206.3,174.8 c12.9,11.1,20.4,27.2,20.4,44.3c0,17-7.5,33.2-20.4,44.3L694.4,506l11.4,137.3c1.3,16.1-4.3,32.1-15.3,44 c-11,11.9-26.6,18.7-42.7,18.7c-1.5,0-141.9-11.6-141.9-11.6l-89.1,105.2C405.9,812.5,389.8,820,372.7,820z"/>
	<path class="fight-note__move-in" d="M284.2,524.1c0,8.9-7.3,15.9-16,15.9H198c-13.7,0-21.1,15.8-12.3,26.2l174.7,206.3 c6.4,7.5,18.2,7.5,24.7,0L488.1,651l158.7,13.1c9.9,0.7,18.3-7.5,17.4-17.4L651,488L772.5,385c7.5-6.4,7.5-18.2,0-24.7L566.3,185.7 c-10.3-8.8-26.2-1.4-26.2,12.3v70.2c0,8.9-7.2,16-16,16l-72.7,0.3c-92,0.4-166.6,74.9-166.9,166.9L284.2,524.1z"/>
	<path class="fight-note__move-line" d="M376.9,502l40.3,40.3c6.2,6.2,6.1,16.4-0.1,22.6l-49.6,49.6c-9.7,9.7-3.7,26.2,9.8,27.2l110.7,9.1"/>
	<path class="fight-note__move-line" d="M444.3,461.1h79.9c8.9,0,15.9,7.3,15.9,16v70.2 c0,13.7,15.8,21.1,26.2,12.3l84.8-71.7"/>
</svg>`;

const halfCircle: string = `
<svg class="fight-note__move fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<path class="fight-note__move-background" d="M480,790c-17.2,0-33.5-7.6-44.6-20.8l-75.6-90.4l-116.5,9.8c-1.6,0.1-3.2,0.2-4.6,0.2 c-16.3,0-32-7-43.1-19.1c-11.1-12.1-16.7-28.5-15.4-45l9.7-118.1L100.6,430C87.5,418.5,80,402.1,80,384.6c0-17.4,7.5-33.9,20.5-45.2 l181-155.4c10.6-9.1,23.9-14,37.6-14c32.3,0,58.5,26.6,58.5,59.4v11.5c0,11,8.9,20,19.8,20h165.2c10.9,0,19.8-9,19.8-20v-11.5 c0-32.7,26.3-59.4,58.5-59.4c13.7,0,27.1,5,37.6,14l180.9,155.4c13,11.3,20.5,27.8,20.5,45.2s-7.5,33.9-20.5,45.2l-89.2,76.6 l9.7,118.1c1.3,16.4-4.3,32.8-15.4,45c-11.1,12.1-26.8,19.1-43.1,19.1c-1.6,0-3.2-0.1-4.6-0.2l-116.5-9.8l-75.6,90.4 C513.5,782.4,497.2,790,480,790z"/>
	<path class="fight-note__move-out" d="M480,790c-17.2,0-33.5-7.6-44.6-20.8l-75.6-90.4l-116.5,9.8c-1.6,0.1-3.2,0.2-4.6,0.2 c-16.3,0-32-7-43.1-19.1c-11.1-12.1-16.7-28.5-15.4-45l9.7-118.1L100.6,430C87.5,418.5,80,402.1,80,384.6c0-17.4,7.5-33.9,20.5-45.2 l181-155.4c10.6-9.1,23.9-14,37.6-14c32.3,0,58.5,26.6,58.5,59.4v11.5c0,11,8.9,20,19.8,20h165.2c10.9,0,19.8-9,19.8-20v-11.5 c0-32.7,26.3-59.4,58.5-59.4c13.7,0,27.1,5,37.6,14l180.9,155.4c13,11.3,20.5,27.8,20.5,45.2s-7.5,33.9-20.5,45.2l-89.2,76.6 l9.7,118.1c1.3,16.4-4.3,32.8-15.4,45c-11.1,12.1-26.8,19.1-43.1,19.1c-1.6,0-3.2-0.1-4.6-0.2l-116.5-9.8l-75.6,90.4 C513.5,782.4,497.2,790,480,790z"/>
	<path class="fight-note__move-in" d="M347.2,306c-7.7,0-13.9-6.4-13.9-14.3v-62.4c0-12.1-13.8-18.8-22.9-10.9L129.4,373.7 c-6.6,5.7-6.6,16.2,0,21.9L236,487.1l-11.6,141c-0.7,8.8,6.6,16.2,15.3,15.5l139.2-11.7l90.3,108c5.6,6.7,16,6.7,21.6,0l90.3-108 l139.2,11.7c8.7,0.7,16-6.7,15.3-15.5l-11.6-141l106.7-91.5c6.6-5.7,6.6-16.2,0-21.9L649.8,218.4c-9.1-7.8-22.9-1.2-22.9,10.9v62.4 c0,7.8-6.3,14.3-14,14.3L347.2,306z"/>
	<path class="fight-note__move-line" d="M367.7,387.2l-36.5,37c-5.4,5.5-14.3,5.4-19.9-0.1l-43.5-44c-8.5-8.6-22.9-3.3-23.9,8.7l-8,98.4"/>
	<path class="fight-note__move-line" d="M402.4,466.9v52.4c0,7.8-6.3,14.1-14.1,14.1h-61.5c-12,0-18.6,14-10.8,23.2l62.9,75.3"/>
	<path class="fight-note__move-line" d="M482.5,498.4l36.5,37c5.4,5.5,5.3,14.5-0.1,20.1l-43.5,44c-8.5,8.6-3.3,23.2,8.6,24.2l97.1,8.1"/>
	<path class="fight-note__move-line" d="M561.2,463.3h51.7c7.7,0,13.9,6.4,13.9,14.3V540c0,12.1,13.8,18.8,22.9,10.9l74.3-63.8"/>
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
	<polygon class="fight-note__icon-figure" points="677.7,120 699.7,452.9 652.1,840 720,840 767.3,455.4 745.2,120"/>
	<path class="fight-note__icon-figure" d="M607.8,418.5L579.4,406c-2-0.9-3.8-1.9-5.6-3.1c-17-11.4-96-63.5-121.8-81c-3.6-2.5-8.6-1.5-11.1,2.1 l-11.7,16.9c-2.5,3.6-1.6,8.6,2,11.1l108.6,74.7c5.3,3.6,7.3,10.4,5,16.4L517.9,512c-2.2,6.2-6.6,11.4-12.4,14.5l-152.8,81.9 c-3.7,2-5.1,6.6-3.1,10.4l10.8,20.2c2,3.7,6.6,5.1,10.4,3.1l150.4-80.5c2.8-1.5,6.3-1.1,8.7,1l21.9,20.1c3,2.8,3.5,7.4,1,10.7 L449.1,730.5c-2.7,3.5-2,8.5,1.6,11.2l17.3,13c3.5,2.7,8.5,2,11.2-1.6l108.8-143.9c3.8-5,6.7-10.5,8.8-16.4 c7.8-22.2,27.8-80.1,34.9-109.3C640.6,447.2,633.8,428.7,607.8,418.5z"/>
</svg>`;

const iconWallBreak: string = `
<svg class="fight-note__icon-wall-break fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<rect class="fight-note__icon-figure" x="680" y="120" width="80" height="130"/>
	<rect class="fight-note__icon-figure" x="680" y="710" width="80" height="130"/>
	<polygon class="fight-note__icon-figure" points="760.6,479.2 658.1,384.8 658.1,438.5 584.8,438.5 584.8,519.9 658.1,519.9 658.1,573.7"/>
	<circle class="fight-note__icon-figure" cx="615" cy="165" r="16"/>
	<path class="fight-note__icon-figure" d="M537.6,449.8c2.8-27.9-3.2-41.4-21.8-45.3s-59.5-13.2-67.4-15 c-19.2-4.4-100.9-23.9-126.9-33.6c-3.5-1.3-7.3,0.5-8.6,4.1l-7.4,21.2c-1.2,3.5,0.6,7.2,4.1,8.5l132.8,35.9c0,0-15,86.6-22.1,102.1 c-6.4,13.8-113.2,73.8-143,94c-3,2.1-3.9,6.4-1.7,9.4l13.1,18.4c2.1,2.9,6.4,3.8,9.3,1.5l118.3-72c2.8-2.1,6.4-2.8,9.9-2.3 l24.7,10.6c4.7,0.8,6.3,7,2.3,9.8l-128.2,86.4c-3,2.1-3.8,6.4-1.5,9.3l13.2,18.4c2.1,3,6.4,3.8,9.3,1.5l146.8-96.7 c14.5-9,24.4-23.9,27.2-40.8C519.9,575.5,534.7,477.8,537.6,449.8z"/>
	<circle class="fight-note__icon-figure" cx="484.8" cy="325.8" r="49"/>
	<rect class="fight-note__icon-figure" x="149.4" y="420.1" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="149.4" y="524.9" width="130" height="15"/>
	<rect class="fight-note__icon-figure" x="149.4" y="472.5" width="130" height="15"/>
	<polygon class="fight-note__icon-figure" points="569.6,209.4 688.6,327.3 671.4,344.3 552.4,226.4"/>
	<circle class="fight-note__icon-figure" cx="525.7" cy="182" r="16"/>
	<polygon class="fight-note__icon-figure" points="552.4,730.8 671.4,612.9 688.6,629.9 569.6,747.8"/>
	<circle class="fight-note__icon-figure" cx="525.7" cy="775.2" r="16"/>
	<circle class="fight-note__icon-figure" cx="615" cy="790.4" r="16"/>
</svg>`;

const iconFloorBreak: string = `
<svg class="fight-note__icon-floor-break fight-note__input-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 960 960" xml:space="preserve">
	<defs></defs>
	<path class="fight-note__icon-background" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<path class="fight-note__icon-plate" data-gradient="var(--plate-color-light),var(--plate-color-dark)" d="M768,840H192c-39.8,0-72-32.2-72-72V192c0-39.8,32.2-72,72-72h576c39.8,0,72,32.2,72,72v576 C840,807.8,807.8,840,768,840z"/>
	<rect class="fight-note__icon-figure" x="120" y="690" width="170" height="80"/>
	<polygon class="fight-note__icon-figure" points="530,720 530,660 430,660 430,720 390,720 480,810 570,720"/>
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
	"qcb": quarterCircle,
	"hcb": halfCircle,
	"qcf": quarterCircle,
	"hcf": halfCircle,
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
	",": ">",
	"qcf": "QCF",
	"qcb": "QCB",
	"hcf": "HCF",
	"hcb": "HCB",
}

export const notations: { [key: string]: Notation } = {

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
	"12": {
		input: "12",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2"],
	},
	"123": {
		input: "123",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-3"],
	},
	"1234": {
		input: "1234",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-3", prefix + "input-4"],
	},
	"124": {
		input: "124",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-2", prefix + "input-4"],
	},
	"13": {
		input: "13",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-3"],
	},
	"14": {
		input: "14",
		svg: "action",
		cls: [prefix + "input", prefix + "input-1", prefix + "input-4"],
	},
	"23": {
		input: "23",
		svg: "action",
		cls: [prefix + "input", prefix + "input-2", prefix + "input-3"],
	},
	"24": {
		input: "24",
		svg: "action",
		cls: [prefix + "input", prefix + "input-2", prefix + "input-4"],
	},
	"34": {
		input: "34",
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
		tooltip: {
			name: "Wall Splat",
		},
	},
	"WB!": {
		input: "WB!",
		svg: "icon-wall-break",
		cls: [prefix + "input", prefix + "input-wall-break", prefix + "input-stage-related"],
		tooltip: {
			name: "Wall Break",
		},
	},
	"F!": {
		input: "F!",
		svg: "icon-floor-break",
		cls: [prefix + "input", prefix + "input-floor-break", prefix + "input-stage-related"],
		tooltip: {
			name: "Floor Break",
		},
	},
	"BB!": {
		input: "BB!",
		svg: "icon-balcony-break",
		cls: [prefix + "input", prefix + "input-balcony-break", prefix + "input-stage-related"],
		tooltip: {
			name: "Balcony Break",
		},
	},

	// Icons.

	"HEAT": {
		input: "HEAT",
		svg: "icon-heat",
		cls: [prefix + "input", prefix + "input-heat", prefix + "input-stage-related"],
		tooltip: {
			name: "Heat",
		},
	},

	// Common stances.

	"WS": {
		input: "WS",
		svg: "",
		cls: [prefix + "input", prefix + "input-WS", prefix + "input-common-stance"],
		tooltip: {
			name: "While Standing",
		},
	},
	"iWS": {
		input: "iWS",
		svg: "",
		cls: [prefix + "input", prefix + "input-iWS", prefix + "input-common-stance"],
		tooltip: {
			name: "Instant While Standing",
		},
	},
	"BT": {
		input: "BT",
		svg: "",
		cls: [prefix + "input", prefix + "input-BT", prefix + "input-common-stance"],
		tooltip: {
			name: "Back Turned",
		},
	},
	"FC": {
		input: "FC",
		svg: "",
		cls: [prefix + "input", prefix + "input-FC", prefix + "input-common-stance"],
		tooltip: {
			name: "Full Crouch",
		},
	},
	"CC": {
		input: "CC",
		svg: "",
		cls: [prefix + "input", prefix + "input-CC", prefix + "input-common-stance"],
		tooltip: {
			name: "Crouch Cancel",
		},
	},
	"LP": {
		input: "LP",
		svg: "",
		cls: [prefix + "input", prefix + "input-LP", prefix + "input-common-stance"],
		tooltip: {
			name: "Low Parry",
		},
	},
	"CH": {
		input: "CH",
		svg: "",
		cls: [prefix + "input", prefix + "input-CH", prefix + "input-common-stance"],
		tooltip: {
			name: "Counter Hit",
		},
	},

	// Special moves.

	"DASH": {
		input: "DASH",
		svg: "",
		cls: [prefix + "input", prefix + "input-DASH", prefix + "input-special-move"],
		tooltip: {
			name: "Dash",
		},
	},
	"WR": {
		input: "WR",
		svg: "",
		cls: [prefix + "input", prefix + "input-WR", prefix + "input-special-move"],
		tooltip: {
			name: "While Running",
		},
	},
	"SS": {
		input: "SS",
		svg: "",
		cls: [prefix + "input", prefix + "input-SS", prefix + "input-special-move"],
		tooltip: {
			name: "Side Step",
		},
	},
	"SSL": {
		input: "SSL",
		svg: "",
		cls: [prefix + "input", prefix + "input-SSL", prefix + "input-special-move"],
		tooltip: {
			name: "Side Step Left",
		},
	},
	"SSR": {
		input: "SSR",
		svg: "",
		cls: [prefix + "input", prefix + "input-SSR", prefix + "input-special-move"],
		tooltip: {
			name: "Side Step Right",
		},
	},

	// Specific.

	"BKP": {
		input: "BKP",
		svg: "",
		cls: [prefix + "input", prefix + "input-BKP", prefix + "input-specific-action"],
		tooltip: {
			name: "Backup",
			characters: ["Alisa"],
			input: "db 1",
		}
	},
	"BOOT": {
		input: "BOOT",
		svg: "",
		cls: [prefix + "input", prefix + "input-BOOT", prefix + "input-specific-action"],
		tooltip: {
			name: "Boot",
			characters: ["Alisa"],
			input: "f 34",
		}
	},
	"DBT": {
		input: "DBT",
		svg: "",
		cls: [prefix + "input", prefix + "input-DBT", prefix + "input-specific-action"],
		tooltip: {
			name: "Dual Boot",
			characters: ["Alisa"],
			input: "d 12 > f 3",
		},
	},
	"DES": {
		input: "DES",
		svg: "",
		cls: [prefix + "input", prefix + "input-DES", prefix + "input-specific-action"],
		tooltip: {
			name: "Destructive Form",
			characters: ["Alisa"],
			input: "d 12",
		},
	},
	"HPF": {
		input: "HPF",
		svg: "",
		cls: [prefix + "input", prefix + "input-HPF", prefix + "input-specific-action"],
		tooltip: {
			name: "Whiplash",
			characters: ["Asuka", "Jun"],
			input: "1 1",
		},
	},
	"LCT": {
		input: "LCT",
		svg: "",
		cls: [prefix + "input", prefix + "input-LCT", prefix + "input-specific-action"],
		tooltip: {
			name: "Leg Cutter",
			characters: ["Asuka", "Jun"],
			input: "db 4 4 4",
		},
	},
	"LIB": {
		input: "LIB",
		svg: "",
		cls: [prefix + "input", prefix + "input-LIB", prefix + "input-specific-action"],
		tooltip: {
			name: "Libertador",
			characters: ["Azucena"],
			input: "f 34",
		},
	},
	"SLS": {
		input: "SLS",
		svg: "",
		cls: [prefix + "input", prefix + "input-SLS", prefix + "input-specific-action"],
		tooltip: {
			name: "Slither Step",
			characters: ["Bryan"],
			input: "d df f",
		},
	},
	"SNE": {
		input: "SNE",
		svg: "",
		cls: [prefix + "input", prefix + "input-SNE", prefix + "input-specific-action"],
		tooltip: {
			name: "Snake Eyes",
			characters: ["Bryan"],
			input: "134",
		},
	},
	"SWA": {
		input: "SWA",
		svg: "",
		cls: [prefix + "input", prefix + "input-SWA", prefix + "input-specific-action"],
		tooltip: {
			name: "Sway",
			characters: ["Bryan"],
			input: " d db b",
		},
	},
	"STB": {
		input: "STB",
		svg: "",
		cls: [prefix + "input", prefix + "input-STB", prefix + "input-specific-action"],
		tooltip: {
			name: "Starburst",
			characters: ["Claudio"],
		},
	},
	"FLY": {
		input: "FLY",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLY", prefix + "input-specific-action"],
		tooltip: {
			name: "Fly",
			characters: ["Devil Jin"],
			input: "34",
		},
	},
	"EWGF": {
		input: "EWGF",
		svg: "",
		cls: [prefix + "input", prefix + "input-EWGF", prefix + "input-specific-action"],
		tooltip: {
			name: "Electric Wind God Fist",
			characters: ["Kazuya", "Reina", "Devil Jin", "Jin"],
			input: "f n d df 2",
		},
	},
	"MCR": {
		input: "MCR",
		svg: "",
		cls: [prefix + "input", prefix + "input-MCR", prefix + "input-specific-action"],
		tooltip: {
			name: "Mourning Crow",
			characters: ["Devil Jin"],
			input: "f 3",
		},
	},
	"WDS": {
		input: "WDS",
		svg: "",
		cls: [prefix + "input", prefix + "input-WDS", prefix + "input-specific-action"],
		tooltip: {
			name: "Wind Step",
			characters: ["Reina"],
			input: "f n",
		}
	},
	"WGS": {
		input: "WGS",
		svg: "",
		cls: [prefix + "input", prefix + "input-WGS", prefix + "input-specific-action"],
		tooltip: {
			name: "Wind God Step",
			characters: ["Reina"],
			input: "df 3",
		}
	},
	"SNK": {
		input: "SNK",
		svg: "",
		cls: [prefix + "input", prefix + "input-SNK", prefix + "input-specific-action"],
		tooltip: {
			name: "Sneak",
			characters: ["Dragunov"],
			input: "d df f",
		},
	},
	"HSP": {
		input: "HSP",
		svg: "",
		cls: [prefix + "input", prefix + "input-HSP", prefix + "input-specific-action"],
		tooltip: {
			name: "Bananeira",
			characters: ["Eddy"],
			input: "f 12",
		},
	},
	"RLX": {
		input: "RLX",
		svg: "",
		cls: [prefix + "input", prefix + "input-RLX", prefix + "input-specific-action"],
		tooltip: {
			name: "Negativa",
			characters: ["Eddy"],
			input: "d 34",
		},
	},
	"KNP": {
		input: "KNP",
		svg: "",
		cls: [prefix + "input", prefix + "input-KNP", prefix + "input-specific-action"],
		tooltip: {
			name: "Kenpo step",
			characters: ["Feng"],
			input: "b 34",
		},
	},
	"STC": {
		input: "STC",
		svg: "",
		cls: [prefix + "input", prefix + "input-STC", prefix + "input-specific-action"],
		tooltip: {
			name: "Shifting Clouds",
			characters: ["Feng"],
			input: "f 34",
		},
	},
	"LFF": {
		input: "LFF",
		svg: "",
		cls: [prefix + "input", prefix + "input-LFF", prefix + "input-specific-action"],
		tooltip: {
			name: "Left Foot Forward",
			characters: ["Hwoarang"],
		},
	},
	"LFS": {
		input: "LFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-LFS", prefix + "input-specific-action"],
		tooltip: {
			name: "Left Flamingo",
			characters: ["Hwoarang"],
			input: "f 3",
		},
	},
	"RFF": {
		input: "RFF",
		svg: "",
		cls: [prefix + "input", prefix + "input-RFF", prefix + "input-specific-action"],
		tooltip: {
			name: "Right Foot Forward",
			characters: ["Hwoarang"],
		},
	},
	"RFS": {
		input: "RFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-RFS", prefix + "input-specific-action"],
		tooltip: {
			name: "Right Flamingo",
			characters: ["Hwoarang"],
			input: "f n 4",
		},
	},
	"GMH": {
		input: "GMH",
		svg: "",
		cls: [prefix + "input", prefix + "input-GMH", prefix + "input-specific-action"],
		tooltip: {
			name: "Gamma Howl",
			characters: ["Jack-8"],
			input: "34",
		},
	},
	"SIT": {
		input: "SIT",
		svg: "",
		cls: [prefix + "input", prefix + "input-SIT", prefix + "input-specific-action"],
		tooltip: {
			name: "Sit Down",
			characters: ["Jack-8"],
			input: "d 34",
		},
	},
	"CDS": {
		input: "CDS",
		svg: "",
		cls: [prefix + "input", prefix + "input-CDS", prefix + "input-specific-action"],
		tooltip: {
			name: "Crouching Demon Stance",
			characters: ["Jin"]
		},
	},
	"ZEN": {
		input: "ZEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-ZEN", prefix + "input-specific-action"],
		tooltip: {
			name: "Zenshin",
			characters: ["Jin"],
			input: "f 34",
		}
	},
	"GEN": {
		input: "GEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-GEN", prefix + "input-specific-action"],
		tooltip: {
			name: "Genjitsu",
			characters: ["Jun"],
			input: "f 34",
		},
	},
	"IZU": {
		input: "IZU",
		svg: "",
		cls: [prefix + "input", prefix + "input-IZU", prefix + "input-specific-action"],
		tooltip: {
			name: "Izumo",
			characters: ["Jun"],
			input: "u 2",
		},
	},
	"MIA": {
		input: "MIA",
		svg: "",
		cls: [prefix + "input", prefix + "input-MIA", prefix + "input-specific-action"],
		tooltip: {
			name: "Miare",
			characters: ["Jun"],
			input: "b 12",
		},
	},
	"JGR": {
		input: "JGR",
		svg: "",
		cls: [prefix + "input", prefix + "input-JGR", prefix + "input-specific-action"],
		tooltip: {
			name: "Jaguar Sprint/Jaguar Run",
			characters: ["King"],
			input: "f 34",
		},
	},
	"JGS": {
		input: "JGS",
		svg: "",
		cls: [prefix + "input", prefix + "input-JGS", prefix + "input-specific-action"],
		tooltip: {
			name: "Jaguar Step",
			characters: ["King"],
			input: "34",
		},
	},
	"DEN": {
		input: "DEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-DEN", prefix + "input-specific-action"],
		tooltip: {
			name: "Dynamic Entry",
			characters: ["Lars"],
			input: "f 3",
		},
	},
	"DSS": {
		input: "DSS",
		svg: "",
		cls: [prefix + "input", prefix + "input-DSS", prefix + "input-specific-action"],
		tooltip: {
			name: "Dragon Charge",
			characters: ["Law"],
			input: "d 12",
		},
	},
	"TFS": {
		input: "TFS",
		svg: "",
		cls: [prefix + "input", prefix + "input-TFS", prefix + "input-specific-action"],
		tooltip: {
			name: "Fake Step",
			characters: ["Law"],
		}
	},
	"HMS": {
		input: "HMS",
		svg: "",
		cls: [prefix + "input", prefix + "input-HMS", prefix + "input-specific-action"],
		tooltip: {
			name: "Hit Man Stance",
			characters: ["Lee"],
		},
	},
	"KNK": {
		input: "KNK",
		svg: "",
		cls: [prefix + "input", prefix + "input-KNK", prefix + "input-specific-action"],
		tooltip: {
			name: "Jin Ji Du Li",
			characters: ["Leo"],
			input: "b 34",
		},
	},
	"BOK": {
		input: "BOK",
		svg: "",
		cls: [prefix + "input", prefix + "input-BOK", prefix + "input-specific-action"],
		tooltip: {
			name: "Fo Bu",
			characters: ["Leo"],
			input: "d 12",
		},
	},
	"LTG": {
		input: "LTG",
		svg: "",
		cls: [prefix + "input", prefix + "input-LTG", prefix + "input-specific-action"],
		tooltip: {
			name: "Lightning Glare",
			characters: ["Leo"],
			input: "1234",
		},
	},
	"HRM": {
		input: "HRM",
		svg: "",
		cls: [prefix + "input", prefix + "input-HRM", prefix + "input-specific-action"],
		tooltip: {
			name: "Hermit",
			characters: ["Leroy"],
			input: "34",
		},
	},
	"DEW": {
		input: "DEW",
		svg: "",
		cls: [prefix + "input", prefix + "input-DEW", prefix + "input-specific-action"],
		tooltip: {
			name: "Dew Glide",
			characters: ["Lili"],
			input: "d df f",
		},
	},
	"DPD": {
		input: "DPD",
		svg: "",
		cls: [prefix + "input", prefix + "input-DPD", prefix + "input-specific-action"],
		tooltip: {
			name: "Deep Dive",
			characters: ["Paul"],
		},
	},
	"HAZ": {
		input: "HAZ",
		svg: "",
		cls: [prefix + "input", prefix + "input-HAZ", prefix + "input-specific-action"],
		tooltip: {
			name: "Haze",
			characters: ["Raven"],
		},
	},
	"SDW": {
		input: "SDW",
		svg: "",
		cls: [prefix + "input", prefix + "input-SDW", prefix + "input-specific-action"],
		tooltip: {
			name: "Shadow stance",
			characters: ["Raven"],
		},
	},
	"SEN": {
		input: "SEN",
		svg: "",
		cls: [prefix + "input", prefix + "input-SEN", prefix + "input-specific-action"],
		tooltip: {
			name: "Sentai",
			characters: ["Reina"],
			input: "f 3"
		},
	},
	"SSH": {
		input: "SSH",
		svg: "",
		cls: [prefix + "input", prefix + "input-SSH", prefix + "input-specific-action"],
		tooltip: {
			name: "Senshin",
			characters: ["Reina"],
			input: "f 12",
		},
	},
	"UNS": {
		input: "UNS",
		svg: "",
		cls: [prefix + "input", prefix + "input-UNS", prefix + "input-specific-action"],
		tooltip: {
			name: "Unsoku",
			characters: ["Reina"],
			input: "b 3",
		},
	},
	"WRA": {
		input: "WRA",
		svg: "",
		cls: [prefix + "input", prefix + "input-WRA", prefix + "input-specific-action"],
		tooltip: {
			name: "Heaven's Wrath",
			characters: ["Reina"],
			input: "d 12",
		},
	},
	"DCK": {
		input: "DCK",
		svg: "",
		cls: [prefix + "input", prefix + "input-DCK", prefix + "input-specific-action"],
		tooltip: {
			name: "Ducking",
			characters: ["Steve"],
			input: "f 3",
		},
	},
	"EXD": {
		input: "EXD",
		svg: "",
		cls: [prefix + "input", prefix + "input-EXD", prefix + "input-specific-action"],
		tooltip: {
			name: "Ducking In",
			characters: ["Steve"],
			input: "f 3 F",
		},
	},
	"FLK": {
		input: "FLK",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLK", prefix + "input-specific-action"],
		tooltip: {
			name: "Flicker Stance",
			characters: ["Steve"],
			input: "b 34",
		},
	},
	"LNH": {
		input: "LNH",
		svg: "",
		cls: [prefix + "input", prefix + "input-LNH", prefix + "input-specific-action"],
		tooltip: {
			name: "Lion Heart",
			characters: ["Steve"],
			input: "ub 3",
		},
	},
	"LWV": {
		input: "LWV",
		svg: "",
		cls: [prefix + "input", prefix + "input-LWV", prefix + "input-specific-action"],
		tooltip: {
			name: "Ducking Left",
			characters: ["Steve"],
			input: "3",
		},
	},
	"PKB": {
		input: "PKB",
		svg: "",
		cls: [prefix + "input", prefix + "input-PKB", prefix + "input-specific-action"],
		tooltip: {
			name: "Peekaboo",
			characters: ["Steve"],
			input: "f 34",
		},
	},
	"RWV": {
		input: "RWV",
		svg: "",
		cls: [prefix + "input", prefix + "input-RWV", prefix + "input-specific-action"],
		tooltip: {
			name: "Ducking Right",
			characters: ["Steve"],
			input: "4",
		},
	},
	"SWY": {
		input: "SWY",
		svg: "",
		cls: [prefix + "input", prefix + "input-SWY", prefix + "input-specific-action"],
		tooltip: {
			name: "Swaying",
			characters: ["Steve"],
			input: "b 3 | b 4",
		},
	},
	"AOP": {
		input: "AOP",
		svg: "",
		cls: [prefix + "input", prefix + "input-AOP", prefix + "input-specific-action"],
		tooltip: {
			name: "Phoenix",
			characters: ["Xiaoyu"],
			input: "d 12",
		},
	},
	"HYP": {
		input: "HYP",
		svg: "",
		cls: [prefix + "input", prefix + "input-HYP", prefix + "input-specific-action"],
		tooltip: {
			name: "Hypnotist",
			characters: ["Xiaoyu"],
			input: "db 12",
		},
	},
	"RDS": {
		input: "RDS",
		svg: "",
		cls: [prefix + "input", prefix + "input-RDS", prefix + "input-specific-action"],
		tooltip: {
			name: "Rain Dance",
			characters: ["Xiaoyu"],
			input: "b 34",
		},
	},
	"DGF": {
		input: "DGF",
		svg: "",
		cls: [prefix + "input", prefix + "input-DGF", prefix + "input-specific-action"],
		tooltip: {
			name: "Manji Dragonfly",
			characters: ["Yoshimitsu"],
			input: "u 12",
		},
	},
	"FLE": {
		input: "FLE",
		svg: "",
		cls: [prefix + "input", prefix + "input-FLE", prefix + "input-specific-action"],
		tooltip: {
			name: "Flea",
			characters: ["Yoshimitsu"],
			input: "d 12",
		},
	},
	"IND": {
		input: "IND",
		svg: "",
		cls: [prefix + "input", prefix + "input-IND", prefix + "input-specific-action"],
		tooltip: {
			name: "Indian Stance",
			characters: ["Yoshimitsu"],
			input: "d 34",
		},
	},
	"KIN": {
		input: "KIN",
		svg: "",
		cls: [prefix + "input", prefix + "input-KIN", prefix + "input-specific-action"],
		tooltip: {
			name: "Kincho",
			characters: ["Yoshimitsu"],
			input: "12",
		},
	},
	"MED": {
		input: "MED",
		svg: "",
		cls: [prefix + "input", prefix + "input-MED", prefix + "input-specific-action"],
		tooltip: {
			name: "Meditation",
			characters: ["Yoshimitsu"],
		},
	},
	"NSS": {
		input: "NSS",
		svg: "",
		cls: [prefix + "input", prefix + "input-NSS", prefix + "input-specific-action"],
		tooltip: {
			name: "No Sword Stance",
			characters: ["Yoshimitsu"],
			input: "b 12",
		},
	},
	"PDP": {
		input: "PDP",
		svg: "",
		cls: [prefix + "input", prefix + "input-PDP", prefix + "input-specific-action"],
		tooltip: {
			name: "Bad Stomach",
			characters: ["Yoshimitsu"],
		},
	},
	"MNT": {
		input: "MNT",
		svg: "",
		cls: [prefix + "input", prefix + "input-MNT", prefix + "input-specific-action"],
		tooltip: {
			name: "Mantis Stance",
			characters: ["Zafina"],
			input: "d 34",
		},
	},
	"SCR": {
		input: "SCR",
		svg: "",
		cls: [prefix + "input", prefix + "input-SCR", prefix + "input-specific-action"],
		tooltip: {
			name: "Scarecrow Stance",
			characters: ["Zafina"],
			input: "34",
		},
	},
	"TRT": {
		input: "TRT",
		svg: "",
		cls: [prefix + "input", prefix + "input-TRT", prefix + "input-specific-action"],
		tooltip: {
			name: "Tarantula Stance",
			characters: ["Zafina"],
			input: "d 12"
		}
	},

	// Shortcuts.

	"QCB": {
		input: "QCB",
		svg: "qcb",
		cls: [prefix + "input", prefix + "input-qcb", prefix + "input-move-tap", prefix + "input-specific-shortcut"],
		tooltip: {
			name: "Quarter Circle Back",
			characters: ["all characters"],
			input: "d db b",
		},
		expand: ["d", "db", "b"],
	},
	"QCF": {
		input: "QCF",
		svg: "qcf",
		cls: [prefix + "input", prefix + "input-qcf", prefix + "input-move-tap", prefix + "input-specific-shortcut"],
		tooltip: {
			name: "Quarter Circle Forward",
			characters: ["all characters"],
			input: "d df f",
		},
		expand: ["d", "df", "f"],
	},
	"HCB": {
		input: "HCB",
		svg: "hcb",
		cls: [prefix + "input", prefix + "input-hcb", prefix + "input-move-tap", prefix + "input-specific-shortcut"],
		tooltip: {
			name: "Half Circle Back",
			characters: ["all characters"],
			input: "f df d db b",
		},
		expand: ["f", "df", "d", "db", "b"],
	},
	"HCF": {
		input: "HCF",
		svg: "hcf",
		cls: [prefix + "input", prefix + "input-hcf", prefix + "input-move-tap", prefix + "input-specific-shortcut"],
		tooltip: {
			name: "Half Circle Forward",
			characters: ["all characters"],
			input: "b db d df f",
		},
		expand: ["b", "db", "d", "df", "f"],
	}
}

export class Notation {
	input: string;
	svg: string;
	cls: string[];
	tooltip?: NotationTooltip;
	expand?: string[];

	constructor(input: string, cls: string[], tooltip: NotationTooltip) {
		this.input = input;
		this.cls = cls;
		this.tooltip = tooltip;
	}
}

export class NotationTooltip {
	name?: string;
	characters?: string[];
	input?: string;

	constructor(name: string, characters?: string[], input?: string) {
		this.name = name;
		this.characters = characters;
		this.input = input;
	}
}
