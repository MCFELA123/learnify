import { Text } from '../../styles/computed/styles';

export const TextMed = ({ children, size, color, opacity=.7, ltsp, style, ...rest }) => {
  return (
  <Text style={{fontFamily:'FontMedium',fontSize:size,color:color,opacity:opacity,letterSpacing:ltsp}} {...rest}>{children}</Text>
  );
};

export const TextBold = ({ children, size, color, opacity=.7, ltsp, style, ...rest }) => {
  return (
  <Text style={{fontFamily:'FontBold',fontSize:size,color:color,opacity:opacity,letterSpacing:ltsp}} {...rest}>{children}</Text>
  );
};

export const TextHeavy = ({ children, size, color, opacity=.7, ltsp, style, ...rest }) => {
  return (
  <Text style={{fontFamily:'FontHeavy',fontSize:size,color:color,opacity:opacity,letterSpacing:ltsp}} {...rest}>{children}</Text>
  );
};