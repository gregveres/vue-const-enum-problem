export const mockHubProxyOn = jest.fn().mockImplementation(() => undefined);
export const mockHubProxyInvoke = jest.fn().mockImplementation(() => undefined);
export const mockCreateHubProxy = jest.fn().mockImplementation(() => {
  return {
    on: mockHubProxyOn,
    invoke: mockHubProxyInvoke
  };
});

export const hubConnectionStartDoneMock = jest.fn().mockImplementation(() => {
  undefined;
});
export function hubConnection() {
  return {
    createHubProxy: mockCreateHubProxy,
    start: (): any => {
      return {
        done: hubConnectionStartDoneMock
      };
    }
  };
}

export default { hubConnection };
