import { ReferenceType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function referenceType(
  context: MarkdownThemeRenderContext,
  referenceType: ReferenceType,
  foreCollpase = false,
): string {
  if (
    referenceType.reflection ||
    (referenceType.name && referenceType.typeArguments)
  ) {
    const reflection: string[] = [];

    if (referenceType.reflection?.url) {
      reflection.push(
        `[${backTicks(referenceType.reflection.name)}](${context.relativeURL(
          referenceType.reflection.url,
        )})`,
      );
    } else {
      reflection.push(
        referenceType.externalUrl
          ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
          : backTicks(referenceType.name),
      );
    }
    if (referenceType.typeArguments && referenceType.typeArguments.length) {
      reflection.push(
        context.typeArguments(referenceType.typeArguments, foreCollpase),
      );
    }
    return reflection.join('');
  }
  return referenceType.externalUrl
    ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
    : backTicks(referenceType.name);
}
