export const scalePointsToPixels = (
  x,
  y,
  actualWidth,
  actualLength,
  currentWidthPx,
  currentLengthPx
) => {
  const scaleX = currentWidthPx / actualWidth;
  const scaleY = currentLengthPx / actualLength;

  // Calculate the center point of the current field in pixels
  const centerX = currentWidthPx / 2;
  const centerY = currentLengthPx / 2;

  // Scale the (x, y) points
  const scaledX = x * scaleX + centerX;
  const scaledY = y * scaleY + centerY;

  // Clamp the scaled points to stay within the field boundaries
  const clampedX = Math.min(Math.max(scaledX, 0), currentWidthPx);
  const clampedY = Math.min(Math.max(scaledY, 0), currentLengthPx);

  return { x: clampedX, y: clampedY };
};
