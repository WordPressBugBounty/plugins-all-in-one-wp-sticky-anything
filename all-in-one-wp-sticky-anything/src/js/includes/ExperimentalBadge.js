import { Tooltip } from "react-tooltip";

/**
 * Small "Experimental" icon shown next to a settings-field-label — same slot
 * ProIcon uses for the Pro crown — for a feature that works but isn't
 * guaranteed to behave the same across every theme yet. Hover/focus shows
 * the explanation via react-tooltip, same as the "Pro Feature" tooltips
 * anchored to .ai1wpsa-pro-feature elsewhere in the settings screens.
 *
 * Icon: Lucide "flask-conical" (https://lucide.dev/icons/flask-conical),
 * inlined the same way ProIcon.js inlines the crown — no lucide-react
 * dependency needed for a single icon.
 */
export default function ExperimentalBadge() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b45309"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-flask-conical-icon lucide-flask-conical ai1wpsa-experimental-badge"
        role="img"
        aria-label={wp.i18n.__('Experimental', 'all-in-one-wp-sticky-anything')}
      >
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
        <path d="M6.453 15h11.094" />
        <path d="M8.5 2h7" />
      </svg>

      <Tooltip
        anchorSelect=".ai1wpsa-experimental-badge"
        variant="warning"
        content={wp.i18n.__('Experimental — behavior can vary by theme, please test after enabling.', 'all-in-one-wp-sticky-anything')}
      />
    </>
  );
}
