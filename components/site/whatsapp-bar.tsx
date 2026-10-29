import { WhatsAppIcon } from "@/components/art";
import { site, wa } from "@/lib/data";

/** Sticky mobile CTA bar. The footer reserves space for it via `--bar-h`. */
export function WhatsAppBar() {
  return (
    <div
      data-whatsapp-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={wa("Hi TeddyPups! I'd love to know more about your puppies.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp us
        </a>
        <a href={`tel:+${site.phoneRaw}`} className="btn btn-ghost !min-h-12 !px-5">
          Call
        </a>
      </div>
    </div>
  );
}
